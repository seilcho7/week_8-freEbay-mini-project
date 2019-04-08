const Item = require('../models/items');
const Purchase = require('../models/purchases');

async function retrieveAll(req, res) {
    const itemsArray = await Item.getAll();
    res.render('shop', { 
        locals: {
            message: `Item(s) available to purchase:`,
            items: itemsArray
        }
    });
}

async function buyButton(req, res) {
    const itemId = req.body.id;
    const addToPurchase = await Purchase.add(req.session.user, itemId);
    // res.redirect('/shop');
}

const escape = require('../utils');
async function createItem(req, res) {
    const name = escape(req.body.name);
    const price = escape(req.body.price);
    const image = escape(req.body.image);
    const createAnItem = await Item.add(name, price, image);
    res.redirect('/shop');
}

// async function deleteItem(req, res) {
//     const name = req.body.selectDelete;
//     const deleteAnItem = await Item.deleteByName(name);
//     res.redirect('/shop');
// }

module.exports = {
    retrieveAll,
    buyButton,
    createItem,
    // deleteItem
};