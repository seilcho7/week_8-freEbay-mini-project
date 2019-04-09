const User = require('../models/users');
const escapeHtml = require('../utils');

function welcome(req, res) {
    res.render('login', {
        locals: {
            freebay: 'Welcome to freEbay.',
            message: 'Please log-in to go to your dashboard.',
            email: ''
        }
    });
}

async function getLogin(req, res) {
    res.render('login', {
        locals: {
            email: '',
            message: ''
        }
    });
}

async function login(req, res) {
    console.log(req.body.email);
    console.log(req.body.password);

    const theEmail = escapeHtml(req.body.email);
    const thePassword = escapeHtml(req.body.password);

    const theUser = await User.getByEmail(theEmail);
    const passwordIsCorrect = theUser.checkPassword(thePassword);
    // const theUser = await User.getByEmail(req.body.email);
    // const passwordIsCorrect = theUser.checkPassword(req.body.password);
    if (passwordIsCorrect) {
        req.session.user = theUser.id;
        req.session.save(() => {
            res.redirect('/dashboard');
        });
    } else {
        res.render('login', {
            locals: {
                email: req.body.email,
                message: 'Password incorrect. Please try again.',
                freebay: 'Welcome to freEbay.'
            }
        });
    }
}

module.exports = {
    welcome,
    login,
    getLogin
};