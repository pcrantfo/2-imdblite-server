const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    uuid = require('uuid');

const app = express();

const movies = [
    {
        // title: 'Lord of the Rings: Fellowship of the Ring',
        title: 'Lord',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        genre: ['action', 'adventure', 'drama'],
        director: 'Peter Jackson',
        imgURL: 'https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976?ref_=tt_ov_i',
        featured: 'yes'
    },
    {
        title: 'Lord of the Rings: The Two Towers',
        director: 'Peter Jackson'
    },
    {
        title: 'Lord of the Rings: The Return of the King',
        director: 'Peter Jackson'
    },
    {
        title: 'The Hobbit: An Unexpected Journey',
        director: 'Peter Jackson'
    },
    {
        title: 'The Hobbit: The Desolation of Smaug',
        director: 'Peter Jackson'
    },
    {
        title: 'The Hobbit: Battle of the Five Armies',
        director: 'Peter Jackson'
    },
    {
        title: `Ocean's Eleven`,
        director: 'Steven Soderbergh'
    },
    {
        title: 'Thor: Ragnarok',
        director: 'Taika Waititi'
    },
    {
        title: 'The Secret Life of Walter Mitty',
        director: 'Ben Stiller'
    },
    {
        title: 'Spaceballs',
        director: 'Mel Brooks'
    }
];

const genres = [
    {
        name: 'action',
        description: 'Shoot shoot bam bam Bruce Willis time.'
    },
    {
        name: 'adventure',
        description: `Woah woah run run crap we're lost.`
    },
    {
        name: 'drama',
        description: 'Drama. Is.'
    }
];

const directors = [
    {
        id: 1,
        name: 'Peter Jackson',
        bio: 'Blah blah blah',
        birthYear: '10/31/1961',
        deathYear: 'N/A'
    },
    {
        id: 2,
        name: 'Taika Waititi',
        bio: 'Blah blah blah',
        birthYear: '09/16/1975',
        deathYear: 'N/A'
    }
];

const users = [
    {
        id: 1,
        name: 'Example Name',
        username: 'example',
        email: 'example@gmail.com',
        password: 'password',
        birthDate: '1/1/1994',
        favorites: {
            listOfMovies: 'here'
        }
    }
];

// middleware
app.use(morgan('common'));

app.use(express.static('public'));

app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// GET requests
app.get('/', (req, res) => {
    res.send(`You've chosen your movie database wisely.`);
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
});

// Gets info about all movies
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Get info about all directors
app.get('/directors', (req, res) => {
    res.json(directors);
});

// Get info about all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Gets info about a single movie, by title
app.get('/movies/:title', (req, res) => {
    res.json(movies.find((movie) => {
        return movie.title === req.params.title
    }));
});

// Gets movie genre by title
app.get('/genres/:name', (req, res) => {
    let genre = genres.find((genre) => {
        return genre.name === req.params.name
    });
    if (genre) {
        res.status(201).send(`The '${req.params.name}' genre's description is: ${genre.description}`);
    } else {
        res.status(404).send(`The '${req.params.name}' genre was not found.`);
    }
});

// Get data about a director
app.get('/directors/:name', (req, res) => {
    res.json(directors.find((director) => {
        return director.name === req.params.name
    }));
});

// Register a new user
app.post('/users', (req, res) => {
    const newUser = req.body;

    if (!newUser.name) {
        const message = 'Missing new user name in request body.';
        res.status(400).send(message);
    } else {
        newUser.id = uuid.v4();
        newUser.favorites = [];
        users.push(newUser);
        res.status(201).send(newUser);
    }
});

// Update a user's username
app.put('/users/:name/:username', (req, res) => {
    let user = users.find((user) => {
        return user.name === req.params.name
    });

    if (user) {
        user.username = req.params.username;
        res.status(201).send(`${user.name} has changed their username to ${req.params.username}.`);
    } else {
        res.status(400).send(`${req.params.name} was not found in the list of users.`);
    }
});

// Add a movie to a user's list of favorites
app.put('/users/:name/:movie/favorites', (req, res) => {
    let user = users.find((user) => {
        return user.name === req.params.name
    });
    
    if (user) {
        res.status(201).send(`${user.name} has added ${req.params.movie} to their list of favorites.`);
    } else {
        res.status(400).send(`${req.params.name} was not found in the list of users.`);
    }
});

// Remove a movie from a user's list of favorites
app.delete('/users/:name/:movie/favorites', (req, res) => {
    let user = users.find((user) => {
        return user.name === req.params.name
    });
    
    if (user) {
        res.status(201).send(`${user.name} has removed ${req.params.movie} from their list of favorites.`);
    } else {
        res.status(400).send(`${req.params.name} was not found in the list of users.`);
    }
});

// Deregister a user by email
app.delete('/users/:name/:email', (req, res) => {
    let user = users.find((user) => {
        return user.email === req.params.email && user.name === req.params.name
    });

    if (user) {
        res.status(201).send(`The user whose email is ${user.email} has been deregistered.`);
    } else {
        res.status(400).send(`${req.params.name} or ${req.params.email} are not valid user entries.`);
    }
})

// listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});