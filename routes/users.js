const express = require('express');

const Router = express.Router;

const usersRoutes = Router();

const {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne
} = require('../controllers/users');

usersRoutes.post('/', create);
usersRoutes.get('/', retrieveAll);
usersRoutes.get('/:id', retrieveOne);
usersRoutes.put('/:id', update);
usersRoutes.delete('/:id', deleteOne);

module.exports = usersRoutes;