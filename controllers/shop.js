const Item = require('../models/items');

async function retrieveAll(req, res) {
    const itemsArray = await Item.getAll();
    res.render('shop', { 
        locals: {
            message: `Items available to purchase:`,
            items: itemsArray
        }
    });
}

module.exports = {
    retrieveAll
};