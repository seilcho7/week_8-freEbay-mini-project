const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');
const port = 3000;

const User = require('./models/users');
const Item = require('./models/items');
const Purchase = require('./models/purchases');

const session = require('express-session');
const FileStore = require(`session-file-store`)(session);

app.engine('html', es6Renderer);
app.set('view engine', 'html');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.use(session({
    store: new FileStore(),
    secret: "dog"
}));

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');
const dashboardRoutes = require('./routes/dashboard');

app.use('/home', homeRoutes);
app.use('/users', usersRoutes);
app.use('/dashboard', dashboardRoutes);

// async function demo() {
//     const user = await User.getByEmail('seilcho7@hotmail.com');
//     user.setPassword("password");
//     await user.save();
//     console.log('you did the thing')
//  }
//  demo();


app.get('/dashboard', (req, res) => {
    console.log(`The user id is: ${req.session.user}`);
    res.send('Welcome!!!!');
});


app.listen(port, () => {
    console.log(`Running on port ${port}`);
});