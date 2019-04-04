const User = require('../models/users');

async function dashboardPage(req, res) {
    console.log(req.body.email);
    const userData = await User.getById(req.session.user);
    const purchaseData = await User.getPurchases(req.session.user);

    res.render('dashboard', {
        locals: {
            message: `Welcome ${userData.firstName} ${userData.lastName}`,
            purchases: purchaseData
        }
    });
}

module.exports = {
    dashboardPage
}