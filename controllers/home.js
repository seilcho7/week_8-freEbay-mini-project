function welcome(req, res) {
    res.render('home', {
        locals: {
            freebay: 'Welcome to freEbay.',
            message: 'Please log in to go to your dashboard.'
        }
    });
}

module.exports = {
    welcome
};