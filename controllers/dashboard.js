const User = require('../models/users');
const Item = require('../models/items');
const Purchase = require('../models/purchases');
const Sell = require('../models/sells');

async function dashboardPage(req, res) {
    const userData = await User.getById(req.session.user);
    const itemData = await Item.getItems(req.session.user);
    const countData = await Purchase.countPurchase(req.session.user);

    res.render('dashboard', {
        locals: {
            message: `Welcome ${userData.firstName} ${userData.lastName}`,
            number: `Purchased ${Object.values(countData)} item(s)`,
            purchases: itemData
        }
    });
}

async function sellButton(req, res) {
    const {itemId} = req.params;
    const theItemId = await Purchase.getItemId(itemId);
    const addToSell = await Sell.add(req.session.user, theItemId);
    const sell = await Purchase.delete(req.session.user, parseInt(itemId));
    res.redirect('/dashboard');
}

module.exports = {
    dashboardPage,
    sellButton
}