const express = require('express'),
    morgan = require('morgan');

const app = express();

const topMovies = [
    {
        title: 'Lord of the Rings: Fellowship of the Ring',
        director: 'Peter Jackson'
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