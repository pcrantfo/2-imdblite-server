SELECT *
FROM genres
WHERE name = 'fantasy';

SELECT title
FROM movies, genres
WHERE genres.genreID = movies.genreID
AND genres.genreID = 4;

UPDATE users
SET email = 'pcrantfo@gmail.com'
WHERE name = 'Peyton Crantford';

DELETE FROM movies
WHERE title = 'Robin Hood: Men in Tights';