const express = require('express');

const Router = express.Router;

const loginRoutes = Router();

const {
    welcome,
    getLogin,
    login
} = require('../controllers/login');

loginRoutes.get('/', welcome, getLogin);
loginRoutes.post('/', login);

module.exports = loginRoutes;