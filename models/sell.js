const db = require('./conn');

class Sell {
    constructor(id, user_id, item_id) {
        this.id = id;
        this.userId = user_id;
        this.itemId = item_id;
    }
}

module.exports = {
    Sell
};