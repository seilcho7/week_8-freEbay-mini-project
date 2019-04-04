const express = require('express');

const Router = express.Router;

const homeRoutes = Router();

const {
    welcome
} = require('../controllers/home');

homeRoutes.get('/', welcome);

module.exports = homeRoutes;