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

app.use('/home', homeRoutes);
app.use('/users', usersRoutes);

// async function demo() {
//     const user = await User.getByEmail('seilcho7@hotmail.com');
//     user.setPassword("password");
//     await user.save();
//     console.log('you did the thing')
//  }
//  demo();

app.get('/home', (req, res) => {
    // send them the form!!!
    // res.send('this is not the login form');
    res.render('home', {
        locals: {
            email: '',
            message: ''
        }
    });
});

app.post('/home', async (req, res) => {
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
        console.log("HEELLLLLLOOOOO");
        // send the form back, but with the email already filled out.
        res.render('home', {
            locals: {
                email: req.body.email,
                message: 'Password incorrect. Please try again.',
                freebay: 'Welcome to freEbay.'
            }
        });
    }
});

app.get('/dashboard', (req, res) => {
    console.log(`The user id is: ${req.session.user}`);
    res.send('Welcome!!!!');
});


app.listen(port, () => {
    console.log(`Running on port ${port}`);
});