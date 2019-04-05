const express = require('express');

const Router = express.Router;

const shopRoutes = Router();

const {
    retrieveAll
} = require('../controllers/shop');

shopRoutes.get('/', retrieveAll);

module.exports = shopRoutes;