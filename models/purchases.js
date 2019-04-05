const db = require('./conn');

class Purchase {
    constructor(id, user_id, item_id) {
        this.id = id;
        this.userId = user_id;
        this.itemId = item_id;
    }

    static delete(id, itemId) {
        return db.result('delete from purchases where user_id=$1 and item_id=$2', [id, itemId]);
    }

    static getById(id) {
        return db.one(`select * from purchases where id=${id}`)
            .then((purchaseData) => {
                const aPurchase = new Purchase(
                    purchaseData.id,
                    purchaseData.user_id,
                    purchaseData.item_id
                );
                return aPurchase;
            });
    }

    static getAll() {
        // .any returns 0 or more results in an array
        // but that's async, so we `return` the call to db.any
        return db.any(`select * from purchases`)
            .then((arrayOfPurchases) => {
                return arrayOfPurchases.map((purchaseData) => {
                    const aPurchase = new Purchase(
                        purchaseData.id,
                        purchaseData.user_id,
                        purchaseData.item_id         
                    );
                    return aPurchase;
                });
            });
    }
}

module.exports = Purchase;