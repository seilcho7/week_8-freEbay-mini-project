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

module.exports = {
    retrieveAll,
    buyButton
};