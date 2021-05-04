const movies = [
    {
        title: 'Lord of the Rings: Fellowship of the Ring',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        genre: {
            name: 'adventure',
            description: 'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.'
        },
        director: {
            name: 'Peter Jackson',
            bio: 'Peter Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide.',
            birthDate: new Date('1961-10-31'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976?ref_=tt_ov_i',
        featured: true
    },
    {
        title: 'Lord of the Rings: The Two Towers',
        description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
        genre: {
            name: 'adventure',
            description: 'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.'
        },
        director: {
            name: 'Peter Jackson',
            bio: 'Peter Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide.',
            birthDate: new Date('1961-10-31'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt0167261/mediaviewer/rm306845440?ref_=tt_ov_i',
        featured: true
    },
    {
        title: 'Lord of the Rings: Return of the King',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        genre: {
            name: 'adventure',
            description: 'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.'
        },
        director: {
            name: 'Peter Jackson',
            bio: 'Peter Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide.',
            birthDate: new Date('1961-10-31'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt0167260/mediaviewer/rm584928512?ref_=tt_ov_i',
        featured: true
    },
    {
        title: 'The Hobbit: An Unexpected Journey',
        description: 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.',
        genre: {
            name: 'fantasy',
            description: 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.'
        },
        director: {
            name: 'Peter Jackson',
            bio: 'Peter Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide.',
            birthDate: new Date('1961-10-31'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt0903624/mediaviewer/rm3577719808?ref_=tt_ov_i',
        featured: false
    },
    {
        title: 'The Hobbit: The Desolation of Smaug',
        description: 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.',
        genre: {
            name: 'fantasy',
            description: 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.'
        },
        director: {
            name: 'Peter Jackson',
            bio: 'Peter Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide.',
            birthDate: new Date('1961-10-31'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt1170358/mediaviewer/rm2431898112?ref_=tt_ov_i',
        featured: false
    },
    {
        title: 'The Hobbit: The Battle of the Five Armies',
        description: 'Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.',
        genre: {
            name: 'fantasy',
            description: 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.'
        },
        director: {
            name: 'Peter Jackson',
            bio: 'Peter Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide.',
            birthDate: new Date('1961-10-31'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt2310332/mediaviewer/rm2908996864?ref_=tt_ov_i',
        featured: false
    },
    {
        title: 'Ocean\'s Eleven',
        description: 'Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.',
        genre: {
            name: 'thirller',
            description: 'Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety.'
        },
        director: {
            name: 'Steven Soderbergh',
            bio: 'Steven Soderbergh is an American film director, producer, screenwriter, cinematographer, and editor. An early pioneer of modern independent cinema, Soderbergh is an acclaimed and prolific filmmaker.',
            birthDate: new Date('1963-01-14'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt0240772/mediaviewer/rm3370325760?ref_=tt_ov_i',
        featured: false
    },
    {
        title: 'Thor Ragnarok',
        description: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.',
        genre: {
            name: 'action',
            description: 'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero.'
        },
        director: {
            name: 'Taika Waititi',
            bio: 'Taika Waititi is a New Zealand film and television director, producer, screenwriter, actor, and comedian. He is the recipient of an Academy Award and a Grammy Award, as well as two Primetime Emmy Award nominations.',
            birthDate: new Date('1975-09-16'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt3501632/mediaviewer/rm1413491712?ref_=tt_ov_i',
        featured: false
    },
    {
        title: 'The Secret Life of Walter Mitty',
        description: 'When both he and a colleague are about to lose their job, Walter takes action by embarking on an adventure more extraordinary than anything he could have ever imagined.',
        genre: {
            name: 'adventure',
            description: 'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.'
        },
        director: {
            name: 'Ben Stiller',
            bio: 'Ben Stiller is an American actor, comedian, producer, film director, and screenwriter. He is the son of the late comedians and actors Jerry Stiller and Anne Meara.',
            birthDate: new Date('1965-11-30'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt0359950/mediaviewer/rm2806567680?ref_=tt_ov_i',
        featured: false
    },
    {
        title: 'Spaceballs',
        description: 'A star-pilot for hire and his trusty sidekick must come to the rescue of a princess and save Planet Druidia from the clutches of the evil Spaceballs.',
        genre: {
            name: 'comedy',
            description: 'Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.'
        },
        director: {
            name: 'Mel Brooks',
            bio: 'Mel Brooks is an American director, writer, actor, comedian, producer, and composer. He is known as a creator of broad film farces and comedic parodies.',
            birthDate: new Date('1926-06-28'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt0094012/mediaviewer/rm1505431040?ref_=tt_ov_i',
        featured: false
    },
    {
        title: 'Robin Hood: Men in Tights',
        description: 'A spoof of Robin Hood in general, and Robin Hood: Prince of Thieves (1991) in particular.',
        genre: {
            name: 'comedy',
            description: 'Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.'
        },
        director: {
            name: 'Mel Brooks',
            bio: 'Mel Brooks is an American director, writer, actor, comedian, producer, and composer. He is known as a creator of broad film farces and comedic parodies.',
            birthDate: new Date('1926-06-28'),
            deathDate: null
        },
        imgURL: 'https://www.imdb.com/title/tt0107977/mediaviewer/rm2738834432?ref_=tt_ov_i',
        featured: false
    }
];

db.movies.insert(movies);

const users = [
    {
        name: 'Peyton Crantford',
        username: 'pcranfrd',
        password: 'test123!',
        email: 'pcranfrd@gmail.com',
        birthDate: new Date('1994-11-21'),
        favorites: [
            ObjectId("608b02d0b3346680783e3bcb"),
            ObjectId("608b02d0b3346680783e3bcc"),
            ObjectId("608b02d0b3346680783e3bcd"),
            ObjectId("608b02d0b3346680783e3bce"),
            ObjectId("608b02d0b3346680783e3bcf"),
            ObjectId("608b02d0b3346680783e3bd0"),
            ObjectId("608b02d0b3346680783e3bd2"),
            ObjectId("608b02d0b3346680783e3bd3"),
            ObjectId("608b02d0b3346680783e3bd4")
        ]
    },
    {
        name: 'Nikki Loseman',
        username: 'nloseman',
        password: 'Test234!',
        email: 'nloseman@gmail.com',
        birthDate: new Date('1995-07-27'),
        favorites: [
            ObjectId("608b02d0b3346680783e3bce"),
            ObjectId("608b02d0b3346680783e3bcf"),
            ObjectId("608b02d0b3346680783e3bd0"),
            ObjectId("608b02d0b3346680783e3bd2")
        ]
    },
    {
        name: 'Jackson Crantford',
        username: 'jcranfrd',
        password: 'Test345!',
        email: 'jcranfrd@gmail.com',
        birthDate: new Date('1993-10-05'),
        favorites: [
            ObjectId("608b02d0b3346680783e3bd1"),
            ObjectId("608b02d0b3346680783e3bd4")
        ]
    },
    {
        name: 'Austin Crouch',
        username: 'aucrouch',
        password: 'Test456!',
        email: 'aucrouch@gmail.com',
        birthDate: new Date('1995-07-05'),
        favorites: [
            
        ]
    },
    {
        name: 'Omar Garcia',
        username: 'ogarcia',
        password: 'Test567!',
        email: 'ogarcia@gmail.com',
        birthDate: new Date('1995-06-03'),
        favorites: [
            ObjectId("608b02d0b3346680783e3bd1"),
            ObjectId("608b02d0b3346680783e3bd2"),
            ObjectId("608b02d0b3346680783e3bd4")
        ]
    }
];

db.users.insert(users)

// Queries
db.movies.find( { title: 'Thor Ragnarok' } ).pretty()

db.movies.find( { "genre.name":"fantasy" } ).pretty()

db.movies.find( { $and: [ { "genre.name":"adventure" }, { "director.name":"Peter Jackson" } ] } ).pretty()

db.movies.update(
    { title: 'Spaceballs' },
    { $set: { description: 'A star-pilot for hire and his trusty sidekick must come to the rescue of a princess and save Planet Druidia from the clutches of the evil Spaceballs. Hail, Skroob!'} }
)

db.movies.updateMany(
    { "director.name":"Peter Jackson" },
    { $set: { "director.bio":"Peter Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide. The world is a better place with you in it, Peter."} }
)

db.users.update(
    { name:'Jackson Crantford' },
    { $push: { favorites: ObjectId("608b02d0b3346680783e3bcc") } }
)

db.users.remove( {username:'aucrouch' } )