require('dotenv').config();

const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');
const port = process.env.PORT;

const helmet = require('helmet');
app.use(helmet());

const session = require('express-session');
const FileStore = require(`session-file-store`)(session);
const setupAuth = require('./auth');

app.engine('html', es6Renderer);
app.set('view engine', 'html');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET
}));

setupAuth(app);

const loginRoutes = require('./routes/login');
const dashboardRoutes = require('./routes/dashboard');
const shopRoutes = require('./routes/shop');
const sellRoutes = require('./routes/sells');

app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/shop', shopRoutes);
app.use('/sells', sellRoutes);

// async function demo() {
//     const user = await User.getByEmail('seilcho7@hotmail.com');
//     user.setPassword("password");
//     await user.save();
//     console.log('you did the thing')
//  }
//  demo();

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});