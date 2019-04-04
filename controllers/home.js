const User = require('../models/users');

function welcome(req, res) {
    res.render('home', {
        locals: {
            freebay: 'Welcome to freEbay.',
            message: 'Please log in to go to your dashboard.',
            email: ''
        }
    });
}

async function getLogin(req, res) {
    // send them the form!!!
    // res.send('this is not the login form');
    res.render('home', {
        locals: {
            email: '',
            message: ''
        }
    });
}

async function login(req, res) {
    console.log(req.body.email);
    console.log(req.body.password);
    // res.send('no soup for you');
    // TODO: check password for real.
    const theUser = await User.getByEmail(req.body.email);
    const passwordIsCorrect = theUser.checkPassword(req.body.password);
    if (passwordIsCorrect) {
        // Save the user's id to the session.
        // Make sure the session is saved before we redirect.
        req.session.user = theUser.id;
        req.session.save(() => {
            res.redirect('/dashboard');
        });
    } else {
        // send the form back, but with the email already filled out.
        res.render('home', {
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