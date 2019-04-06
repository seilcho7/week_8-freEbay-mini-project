// const User = require('../models/users');
const Sell = require('../models/sells');

async function retrieveAll(req, res) {
    const theList = await Sell.getById(req.session.user);
    res.render('sells', {
        locals: {
            message: `Item(s) listed for selling:`,
            list: theList
        }
    });
}

module.exports = {
    retrieveAll
}