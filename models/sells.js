const db = require('./conn');

class Sell {
    constructor(id, user_id, item_id) {
        this.id = id;
        this.userId = user_id;
        this.itemId = item_id;
    }

    static add(id, itemId) {
        return db.one(`
            insert into sells 
                (user_id, item_id)
            values 
                ($1, $2)
            returning id, user_id, item_id
        `, [id, itemId])
        .then((data) => {
            return data;
        })
    }

    static getById(id) {
        return db.any(`select * from sells inner join items on sells.item_id = items.id where user_id=${id}`)
            .then((item) => {
                return item;
            })
    }
}

module.exports = Sell;