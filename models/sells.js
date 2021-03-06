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
        return db.any(`select s.id, i.name, i.price, i.image from sells s inner join items i on s.item_id = i.id where user_id=${id}`)
            .then((item) => {
                return item;
            })
    }

    static delete(id, itemId) {
        return db.result(`delete from sells where user_id=$1 and id=$2`, [id, itemId]);
    }

    static getItemId(itemId) {
        return db.one(`select item_id from sells where id=$1`, [parseInt(itemId)])
            .then((item) => {
                return item.item_id;
            });
    }

    static countSell(id) {
        return db.one(`select count(user_id) from sells where user_id=${id}`)
            .then((count) => {
                return count;
            });
    }
}

module.exports = Sell;