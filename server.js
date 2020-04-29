const express = require('express');
const path = require('path');

const expressSession = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

require('dotenv').config();

const authRouter = require('./routes/auth');

// App Variables

const app = express();
const port = process.env.PORT || 4200;

// Session Configuration

const session = {
  secret: 'LoxodontaElephasMammuthusPalaeoloxodonPrimelephas',
  cookie: {},
  resave: false,
  saveUnitialized: false
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  // serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

// Passport Configuration

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL || 'https://localhost:4200/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    /**
    * Access tokens are used to authorize users to an API
    * (resource server)
    * accessToken is the token to call the Auth0 API
    * or a secured third-party API
    * extraParams.id_token has the JSON Web Token
    * profile has all the information from the user
    */
    return done(null, profile);
  }
);

// App Configuration

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

// Router mounting

const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

app.get('/', function (req, res) {
  res.render('index', { title: 'Home' });
});

app.get('/user', secured, (req, res, next) => {
  const { _raw, _json, ...userProfile } = req.user;
  res.render('user', {
    title: 'Profile',
    userProfile: userProfile
  });
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

app.use('/', authRouter);

app.listen(port, () => {
  console.log('Server listening on port 4200!');
});
