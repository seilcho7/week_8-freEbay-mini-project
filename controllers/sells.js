// const User = require('../models/users');
const Sell = require('../models/sells');
const Purchase = require('../models/purchases');
async function retrieveAll(req, res) {
    const theList = await Sell.getById(req.session.user);
    const countData = await Sell.countSell(req.session.user);
    res.render('sells', {
        locals: {
            message: `Item(s) listed for selling:`,
            number: `Listed ${Object.values(countData)} item(s)`,
            list: theList
        }
    });
}

async function cancelButton(req, res) {
    const {itemId} = req.params;
    const theItemId = await Sell.getItemId(itemId);
    const addToPurchase = await Purchase.add(req.session.user, theItemId);
    const cancel = await Sell.delete(req.session.user, parseInt(itemId));
    res.redirect('/sells');
}

module.exports = {
    retrieveAll,
    cancelButton
}