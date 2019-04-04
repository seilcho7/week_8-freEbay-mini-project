const User = require('../models/users');

async function dashboardPage(req, res) {
    console.log(req.body.email);
    const userData = await User.getById(req.session.user);
    const purchaseData = await User.getPurchases(req.session.user);
    const itemData = await User.getItems(req.session.user);
    const countData = await User.countPurchase(req.session.user);

    res.render('dashboard', {
        locals: {
            message: `Welcome ${userData.firstName} ${userData.lastName}`,
            number: `You have ${Object.values(countData)} purchases:`,
            purchases: itemData
        }
    });
}

module.exports = {
    dashboardPage
}