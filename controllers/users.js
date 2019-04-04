function create(req, res) {
    res.render('users', {
        locals: {
            message: `Created`
        }
    });
}

function retrieveAll(req, res) {
    res.render('users', { 
        locals: {
            message: "Retrieved all"
        }
    });
}

function retrieveOne(req, res) {
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