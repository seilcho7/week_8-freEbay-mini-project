const db = require('./conn');

class Sell {
    constructor(id, user_id, item_id) {
        this.id = id;
        this.userId = user_id;
        this.itemId = item_id;
    }

    // static add(sellData) {
    //     return db.one(`
    //         insert into sells 
    //             (user_id, item_id)
    //         values 
    //             ($1, $2)
    //         returning id, user_id, item_id
    //     `, [sellData.user_id, sellData.item_id])
    //     .then((data) => {
    //         return data;
    //     })
    // }
}

module.exports = {
    Sell
};