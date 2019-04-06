const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.password = password;
    }

    static delete(id) {
        return db.result('delete from users where id=$1', [id]);
    }

    static add(userData) {
        return db.one(`
            insert into users 
                (first_name, last_name, email, password)
            values 
                ($1, $2, $3, $4)
            returning id, first_name, last_name
        `, [userData.first_name, userData.last_name, userData.email, userData.password])
        .then((data) => {
            return data.id;
        })
    }

    static getById(id) {
        return db.one(`select * from users where id=${id}`)
            .then((userData) => {
                const userInstance = new User(
                    userData.id, 
                    userData.first_name,
                    userData.last_name,
                    userData.email,
                    userData.password
                    );
                return userInstance;
            })
    }

    static getAll() {
        return db.any(`select * from users`)
            .then((arrayOfUsers) => {
                return arrayOfUsers.map((userData) => {
                    const aUser = new User(
                        userData.id, 
                        userData.first_name, 
                        userData.last_name, 
                        userData.email, 
                        userData.password
                    );
                    return aUser;
                })
            })
    }
    
    static update(id, userData) {
        return db.result(`
            update users
            set first_name = $1, last_name = $2, email = $3, password = $4
            where id=$5
        `, [userData.first_name, userData.last_name, userData.email, userData.password, id])
    }

    save() {
        return db.result(`            
        update users set 
            first_name='${this.firstName}',
            last_name='${this.lastName}',
            email='${this.email}',
            password='${this.password}'
        where id=${this.id}
        `);
    }

    setPassword(newPassword) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }

    static getByEmail(email) {
        return db.one(`select * from users where email=$1`, [email])
            .then(userData => {
                const aUser = new User(
                    userData.id, 
                    userData.first_name, 
                    userData.last_name, 
                    userData.email, 
                    userData.password
                );
                return aUser;
            });
    }

    checkPassword(aPassword) {
        return bcrypt.compareSync(aPassword, this.password);
    }
}

module.exports = User;