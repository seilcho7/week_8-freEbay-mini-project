const User = require('../models/users');

async function dashboardPage(req, res) {
    console.log(req.body.email);
    const userData = await User.getById(req.session.user);
    console.log(userData);
    console.log("That was the usserrrrrrrrrrrrrrrrrr");

    res.render('dashboard', {
        locals: {
            message: `Welcome ${userData.firstName} ${userData.lastName}`
        }
    });
}

module.exports = {
    dashboardPage
}