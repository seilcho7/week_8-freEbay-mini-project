const User = require('../models/users');
const Item = require('../models/items');
const Purchase = require('../models/purchases');

// const dashboard = require('../routes/dashboard')

async function dashboardPage(req, res) {
    // console.log(`LOOK AT ME: `, req.body.email);
    const userData = await User.getById(req.session.user);
    // const purchaseData = await User.getPurchases(req.session.user);
    const itemData = await Item.getItems(req.session.user);
    const countData = await User.countPurchase(req.session.user);

    res.render('dashboard', {
        locals: {
            message: `Welcome ${userData.firstName} ${userData.lastName}`,
            number: `Purchase history: ${Object.values(countData)} item(s)`,
            purchases: itemData
        }
    });
}

async function sellButton(req, res) {
    // const itemId = await Purchase.deleteOne(req.session.user);
    // console.log(`SOLD THIS ITEM: `, req.params)
    const {itemId} = req.params;
    const sell = await Purchase.delete(req.session.user, itemId);
    console.log(`akjsdhkajdhajskdhajskdhkajsdaksjdhkasdhadklsj ${itemId}`);
    res.render('users', { 
        locals: {
            messages: `Deleted ${req.params.id}`
        }
    });
}

module.exports = {
    dashboardPage,
    sellButton
}