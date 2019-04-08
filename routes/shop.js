const express = require('express');

const Router = express.Router;

const shopRoutes = Router();

const {
    retrieveAll,
    buyButton,
    createItem,
    // deleteItem
} = require('../controllers/shop');

shopRoutes.get('/', retrieveAll);
shopRoutes.post('/', buyButton);
shopRoutes.post('/create', createItem);
// shopRoutes.post('/delete', deleteItem);

module.exports = shopRoutes;