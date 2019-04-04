const express = require('express');

const Router = express.Router;

const dashboardRoutes = Router();

const {
    dashboardPage
} = require('../controllers/dashboard');

dashboardRoutes.get('/', dashboardPage);

module.exports = dashboardRoutes;