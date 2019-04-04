function welcome(req, res) {
    res.render('home', {
        locals: {
            welcome: 'Welcome to freEbay.',
            message: 'Please log in to go to your dashboard.'
        }
    });
}

module.exports = {
    welcome
};