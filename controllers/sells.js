// const User = require('../models/users');
const Sell = require('../models/sells');

// async function addToSells(req, res) {
//     const sellItemId = await Sell.add(req.body);
//     console.log(req.body);
//     res.render('sells', {
//         locals: {
//             message: `Listed ${sellItemId}`
//         }
//     });
// }

async function welcome(req, res) {
    res.render('sells', {
        locals: {
            message: `WELCOME`
        }
    });
}

module.exports = {
    // addToSells
    welcome
}