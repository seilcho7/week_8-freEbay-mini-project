function dashboardPage(req, res) {
    res.render('dashboard', {
        locals: {
            message: "DASHBOAAARD"
        }
    });
}



module.exports = {
    dashboardPage
}