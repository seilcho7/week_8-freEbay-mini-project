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

async function createItem(req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    console.log(name);
    console.log(price);
    console.log(image);

    const createAnItem = await Item.add(name, price, image);
    res.redirect('/shop');
}

module.exports = {
    retrieveAll,
    buyButton,
    createItem
};