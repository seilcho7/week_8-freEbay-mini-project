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
                return itemInstance;
            });
    }

    static getItems(id) {
        return db.any(`select * from items i inner join purchases p on i.id = p.item_id where p.user_id=${id}`)
            .then((arrayOfItems) => {
                return arrayOfItems;
            });
    }

    // static getAllNotInCart(id) {
    //     return db.any(`select i.name, i.price, i.image from items i left join purchases p on i.id = p.item_id where p.item_id is null  and p.user_id = ${id}`)
    //         .then((result) => {
    //             // console.log(result);
    //             return result;
    //         });
    // }
}

module.exports = Item;