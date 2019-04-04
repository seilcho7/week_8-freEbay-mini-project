const express = require('express');

const Router = express.Router;

const homeRoutes = Router();

const {
    welcome,
    getLogin,
    login
} = require('../controllers/home');

homeRoutes.get('/', welcome, getLogin);
homeRoutes.post('/', login);

module.exports = homeRoutes;