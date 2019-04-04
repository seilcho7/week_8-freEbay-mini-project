const db = require('./conn');

class Item {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    static getAll() {
        return db.any(`select * from items`)
            .then((result) => {
                console.log(result);
                return result;
            });
    }

    static getById(id) {
        return db.one(`select * from items where id=${id}`)
            .then((itemData) => {
                const itemInstance = new Item(
                    itemData.id,
                    itemData.name,
                    itemData.price,
                    itemData.image
                    );
                console.log(itemInstance);
                return itemInstance;
            });
            // .catch(() => {
            //     return null;
            // })
    }
}

module.exports = Item;