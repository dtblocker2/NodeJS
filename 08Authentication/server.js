var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
require('dotenv').config();

passport.use(
    new Strategy({
        clientID: process.env.clientID,
            clientSecret: process.env.clientSecret,
            callbackURL: process.env.callbackURL
    },
    function(accessToken, refreshToken, profile, cb){
        return cb(null, profile)
    }
    )
);

//serializing nad deserializing
passport.serializeUser(function(user, cb) {
    cb(null, user)
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj)
});

const app = express();

//set view directory
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

//you can get below in documentation of passport js
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')({secret: 'lco app', resave: true, saveUninitialized: true}));

//setting routes

//@route    -   GET /home
//@des      -   a route to home page
//@access   -   PUBLIC
app.get('/', (req, res) =>{
    res.render('home', { user: req.user })
});

//@route    -   GET /login
//@des      -   a route to login
//@access   -   PUBLIC
app.get('/login', (req, res) =>{
    res.render('login')
});

//@route    -   GET /login/facebook
//@des      -   a route to facebook authentication
//@access   -   PUBLIC
app.get('/login/facebook', (req, res) =>{
    passport.authenticate('facebook');
});

//redirection
app.get('/login/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
});

//@route    -   GET /profile
//@des      -   a route to profile of user
//@access   -   PRIVATE
app.get('/profile', require('connect-ensure-login').ensureLoggedIn(), (req,res) => {
    res.render('profile', { user: req.user });
});

app.listen(3000, () => console.log('Server running at port: 3000'));

/**
 * this wont work on https server sue to facebook policies
 * thus we have to use third party hostings like github.io, heroku, digital ocean, hostinger etc.
 */