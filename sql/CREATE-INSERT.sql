DROP TABLE genres, directors, movies, users, user_movies;

DROP TABLE IF EXISTS genres;
CREATE TABLE genres (
	genreID serial PRIMARY KEY,
	name varchar(50) NOT NULL,
	description varchar(1000)
);

INSERT INTO genres (name, description)
VALUES (
	'action',
	'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero.'
),
(
	'comedy',
	'Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.'
),
(
	'adventure',
	'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.'
),
(
	'fantasy',
	'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.'
),
(
	'thriller',
	'Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety.'
);

DROP TABLE IF EXISTS directors;
CREATE TABLE directors (
	directorID serial PRIMARY KEY,
	name varchar(50) NOT NULL,
	bio varchar(1000),
	birthYear date,
	deathYear date
);

INSERT INTO directors (name, bio, birthYear, deathYear)
VALUES ('Peter Jackson', 'Peter Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide.', '1961-10-31', null),
('Steven Soderbergh', 'Steven Soderbergh is an American film director, producer, screenwriter, cinematographer, and editor. An early pioneer of modern independent cinema, Soderbergh is an acclaimed and prolific filmmaker.', '1963-01-14', null),
('Taika Waititi', 'Taika Waititi is a New Zealand film and television director, producer, screenwriter, actor, and comedian. He is the recipient of an Academy Award and a Grammy Award, as well as two Primetime Emmy Award nominations.', '1975-09-16', null),
('Ben Stiller', 'Ben Stiller is an American actor, comedian, producer, film director, and screenwriter. He is the son of the late comedians and actors Jerry Stiller and Anne Meara.', '1965-11-30', null),
('Mel Brooks', 'Mel Brooks is an American director, writer, actor, comedian, producer, and composer. He is known as a creator of broad film farces and comedic parodies.', '1926-06-28', null);

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
	movieID serial PRIMARY KEY,
	title varchar(50) NOT NULL,
	description varchar(1000),
	directorID integer NOT NULL,
	genreID integer NOT NULL,
	imgURL varchar(300),
	featured boolean,
	CONSTRAINT genreKey FOREIGN KEY (genreID)
		REFERENCES genres (genreID),
	CONSTRAINT directoryKey FOREIGN KEY (directorID)
		REFERENCES directors (directorID)
);

INSERT INTO movies (title, description, genreID, directorID, imgURL, featured)
VALUES ('Lord of the Rings: Fellowship of the Ring', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', 3, 1, 'https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976?ref_=tt_ov_i', True),
('Lord of the Rings: The Two Towers', 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron''s new ally, Saruman, and his hordes of Isengard.', 3, 1, 'https://www.imdb.com/title/tt0167261/mediaviewer/rm306845440?ref_=tt_ov_i', True),
('Lord of the Rings: The Return of the King', 'Gandalf and Aragorn lead the World of Men against Sauron''s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', 3, 1, 'https://www.imdb.com/title/tt0167260/mediaviewer/rm584928512?ref_=tt_ov_i', True),
('The Hobbit: An Unexpected Journey', 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.', 4, 1, 'https://www.imdb.com/title/tt0903624/mediaviewer/rm3577719808?ref_=tt_ov_i', False),
('The Hobbit: The Desolation of Smaug', 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.', 4, 1, 'https://www.imdb.com/title/tt1170358/mediaviewer/rm2431898112?ref_=tt_ov_i', False),
('The Hobbit: The Battle of the Five Armies', 'Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.', 4, 1, 'https://www.imdb.com/title/tt2310332/mediaviewer/rm2908996864?ref_=tt_ov_i', False),
('Ocean''s Eleven', 'Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.', 5, 2, 'https://www.imdb.com/title/tt0240772/mediaviewer/rm3370325760?ref_=tt_ov_i', False),
('Thor Ragnarok', 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.', 1, 3, 'https://www.imdb.com/title/tt3501632/mediaviewer/rm1413491712?ref_=tt_ov_i', False),
('The Secret Life of Walter Mitty', 'When both he and a colleague are about to lose their job, Walter takes action by embarking on an adventure more extraordinary than anything he could have ever imagined.', 3, 4, 'https://www.imdb.com/title/tt0359950/mediaviewer/rm2806567680?ref_=tt_ov_i', False),
('Spaceballs', 'A star-pilot for hire and his trusty sidekick must come to the rescue of a princess and save Planet Druidia from the clutches of the evil Spaceballs.', 2, 5, 'https://www.imdb.com/title/tt0094012/mediaviewer/rm1505431040?ref_=tt_ov_i', False),
('Robin Hood: Men in Tights', 'A spoof of Robin Hood in general, and Robin Hood: Prince of Thieves (1991) in particular.', 2, 5, 'https://www.imdb.com/title/tt0107977/mediaviewer/rm2738834432?ref_=tt_ov_i', False);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
	userID serial PRIMARY KEY,
	name varchar(50),
	username varchar(50) NOT NULL,
	password varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	birthDate date
);

INSERT INTO users (name, username, password, email, birthDate)
VALUES ('Peyton Crantford', 'pcranfrd', 'test123!', 'pcranfrd@gmail.com', '1994-11-21'),
('Nikki Loseman', 'nloseman', 'test234!', 'nloseman@gmail.com', '1995-07-27'),
('Jackson Crantford', 'jcranfrd', 'test345!', 'jcranfrd@gmail.com', '1993-10-05');

DROP TABLE IF EXISTS user_movies;
CREATE TABLE user_movies (
	userMovieID serial PRIMARY KEY,
	userID integer,
	movieID integer,
	CONSTRAINT userKey FOREIGN KEY (userID)
		REFERENCES users (userID),
	CONSTRAINT movieKey FOREIGN KEY (movieID)
		REFERENCES movies (movieID)
);

INSERT INTO user_movies (userID, movieID)
VALUES (1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 8),
(1, 9),
(1, 10),
(2, 4),
(2, 5),
(2, 6),
(2, 8),
(3, 7),
(3, 10);