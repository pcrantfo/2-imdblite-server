const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    uuid = require('uuid'), 
    mongoose = require('mongoose');

const models = require('./models.js');

const passport = require('passport');
require('./passport');

const movies = models.movie;
const users = models.user;

mongoose.connect('mongodb://localhost:27017/IMDBLite', { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

// middleware
app.use(bodyParser.json());

let auth = require('./auth.js')(app);

app.use(morgan('common'));

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// GET requests
app.get('/', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    res.send(`You've chosen your movie database wisely.`);
});

app.get('/documentation', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
});

// Gets info about all movies
app.get('/movies', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    movies.find()
    .then((movies) => {
        res.status(201).json(movies);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

// Get info about all users
app.get('/users', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    users.find()
    .then((users) => {
        res.status(201).json(users);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

// Gets info about a single movie, by title
app.get('/movies/:title', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    movies.findOne( { title: req.params.title } )
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

// Gets movie genre by title
app.get('/movies/genre/:name', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    movies.findOne({ "genre.name": req.params.name })
    .then((movie) => {
        res.json(movie.genre.description);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

// Get data about a director
app.get('/movies/director/:name', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    movies.findOne({ "director.name": req.params.name })
    .then((movie) => {
        res.json(movie.director);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

// Get info about a user by username
app.get('/users/:username', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    users.findOne({ username: req.params.username })
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

// Register a new user
app.post('/users',
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
    users.findOne({ username: req.body.username })
    .then((user) => {
        if (user) {
            return res.status(400).send(`${req.body.username} already exists.`);
        } else {
            users
                .create({
                    name: req.body.name,
                    username: req.body.username, 
                    password: req.body.password,
                    email: req.body.email,
                    birthDate: req.body.birthday
                })
                .then((user) => {res.status(201).json(user) })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Error: ' + error);
            })
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
    })
})

// Update a user's username
app.put('/users/:username', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    users.findOneAndUpdate({ username: req.params.username }, 
    { $set:
        {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            birthDate: req.body.birthDate
        }
    },
    { new: true },
    (err, updatedUser) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error: ' + err);
        } else {
            res.json(updatedUser);
        }
    });
});

// Add a movie to a user's list of favorites
app.post('/users/:username/movies/:movieID', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    users.findOneAndUpdate({ username: req.params.username },
    {
        $push: { favorites: req.params.movieID }
    },
    { new: true },
    (err, updatedUser) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error: ' + err);
        } else {
            res.json(updatedUser);
        }
    });
});

// Remove a movie from a user's list of favorites
app.delete('/users/:username/movies/:movieID', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    users.findOneAndUpdate({ username: req.params.username },
    {
        $pull: { favorites: req.params.movieID }
    },
    { new: true },
    (err, updatedUser) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error: ' + err);
        } else {
            res.json(updatedUser);
        }
    });
});

// delete a user by username
app.delete('/users/:username', 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
    users.findOneAndRemove({ username: req.params.username })
    .then((user) => {
        if (!user) {
            res.status(400).send(req.params.username + ' was not found.');
        } else {
            res.status(200).send(req.params.username + ' was deleted.');
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

// listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});