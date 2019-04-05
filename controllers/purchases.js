const Purchase = require('../models/purchases');

async function deleteOne(req, res) {
    const {itemId} = req.params;
    console.log(itemId);
    const aPurchase = await User.delete(req.params.id, itemId);
    res.render('users', { 
        locals: {
            messages: `Deleted ${req.params.id}`
        }
    });
}

module.exports = {
    deleteOne
};