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

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// GET requests
app.get('/', (req, res) => {
    res.send(`You've chosen your movie database wisely.`);
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

// listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});