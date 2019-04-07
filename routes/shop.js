const express = require('express');

const Router = express.Router;

const shopRoutes = Router();

const {
    retrieveAll,
    buyButton
} = require('../controllers/shop');

shopRoutes.get('/', retrieveAll);
shopRoutes.post('/:itemId', buyButton);

module.exports = shopRoutes;