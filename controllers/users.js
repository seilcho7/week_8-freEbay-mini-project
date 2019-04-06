const User = require('../models/users');

async function create(req, res) {
    const theUserId = await User.add(req.body);
    res.render('users', {
        locals: {
            message: `Created user with user id ${theUserId}`
        }
    });
}

async function retrieveAll(req, res) {
    const usersArray = await User.getAll();
    res.render('users', { 
        locals: {
            users: usersArray
        }
    });
}

async function retrieveOne(req, res) {
    const theUser = await User.getById(req.params.id);
    res.render('users', { 
        locals: {
            oneUser: theUser
        }
    });
}

async function update(req, res) {
    const theUser = await User.update(req.params.id, req.body);
    res.render('users', { 
        locals: {
            message: `Updated user ${req.params.id}`
        }
    });
}

async function deleteOne(req, res) {
    const theUser = await User.delete(req.params.id);
    res.render('users', { 
        locals: {
            message: `Deleted ${req.params.id}`
        }
    });
}

module.exports = {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne,
};