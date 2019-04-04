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
    console.log(User);
    const usersArray = await User.getAll();
    res.render('users', { 
        locals: {
            users: usersArray
        }
    });
}

function retrieveOne(req, res) {
    console.log(req.body);
    res.render('users', { 
        locals: {
            message: `Retrieved ${req.params.id}`
        }
    });
}

function update(req, res) {
    res.render('users', { 
        locals: {
            message: `Updated ${req.params.id}`
        }
    });
}

function deleteOne(req, res) {
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