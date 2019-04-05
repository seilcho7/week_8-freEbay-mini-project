const express = require('express');

const Router = express.Router;

const sellRoutes = Router();

const {
    // addToSells
    welcome
} = require('../controllers/sells');

// sellRoutes.get('/', addToSells);
sellRoutes.get('/', welcome)

module.exports = sellRoutes;