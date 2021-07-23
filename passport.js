const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  models = require('./models.js'),
  passportJWT = require('passport-jwt');

let users = models.user,
  JWTStrategy = passportJWT.Strategy,
  ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, callback) => {
  users.findOne({ "username": username }, (error, user) => {
    if (error) {
      console.error(error);
      return callback(error);
    }

    if (!user) {
      return callback(null, false, { message: 'Incorrect username or password.' });
    }

    if (!user.validatePassword(password)) {
      return callback(null, false, { message: 'Incorrect password.' });
    }

    console.log('finished');
    return callback(null, user);
  });
}));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_jwt_secret'
}, (jwtPayload, callback) => {
  return users.findById(jwtPayload._id)
    .then((user) => {
      return callback(null, user);
    })
    .catch((error) => {
      return callback(error)
    });
}));