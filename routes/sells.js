const express = require('express');

const Router = express.Router;

const sellRoutes = Router();

const {
    retrieveAll
} = require('../controllers/sells');

sellRoutes.get('/', retrieveAll);

module.exports = sellRoutes;