const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');
const port = 3000;
app.engine('html', es6Renderer);
app.set('view engine', 'html');
app.set('views', 'views');

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

app.use('/home', homeRoutes);
app.use('/users', usersRoutes);














app.listen(port, () => {
    console.log(`Running on port ${port}`);
});