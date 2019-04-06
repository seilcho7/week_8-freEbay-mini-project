const express = require('express');

const Router = express.Router;

const sellRoutes = Router();

const {
    retrieveAll,
    cancelButton
} = require('../controllers/sells');

sellRoutes.get('/', retrieveAll);
sellRoutes.post('/:itemId', cancelButton);

module.exports = sellRoutes;