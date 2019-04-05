const express = require('express');

const Router = express.Router;

const dashboardRoutes = Router();

const {
    dashboardPage,
    sellButton
} = require('../controllers/dashboard');

dashboardRoutes.get('/', dashboardPage);
dashboardRoutes.post('/:itemId', sellButton);

module.exports = dashboardRoutes;