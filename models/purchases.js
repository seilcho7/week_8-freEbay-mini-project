const db = require('./conn');

class Purchase {
    constructor(id, user_id, item_id) {
        this.id = id;
        this.userId = user_id;
        this.itemId = item_id;
    }

    static delete(id, itemId) {
        return db.result(`delete from purchases where user_id=$1 and id=$2`, [id, itemId]);
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

    static getItemId(itemId) {
        return db.one(`select item_id from purchases where id=$1`, [parseInt(itemId)])
            .then((item) => {
                return item.item_id;
            });
    }
}

module.exports = Purchase;