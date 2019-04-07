const express = require('express');

const Router = express.Router;

const shopRoutes = Router();

const {
    retrieveAll,
    buyButton,
    createItem
} = require('../controllers/shop');

shopRoutes.get('/', retrieveAll);
shopRoutes.post('/', buyButton);
shopRoutes.post('/create', createItem);

module.exports = shopRoutes;