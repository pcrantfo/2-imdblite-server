--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-04-28 10:59:50 MDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16409)
-- Name: directors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.directors (
    directorid integer NOT NULL,
    name character varying(50) NOT NULL,
    bio character varying(1000),
    birthyear date,
    deathyear date
);


ALTER TABLE public.directors OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16407)
-- Name: directors_directorid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.directors_directorid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.directors_directorid_seq OWNER TO postgres;

--
-- TOC entry 3306 (class 0 OID 0)
-- Dependencies: 202
-- Name: directors_directorid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.directors_directorid_seq OWNED BY public.directors.directorid;


--
-- TOC entry 201 (class 1259 OID 16398)
-- Name: genres; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genres (
    genreid integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(1000)
);


ALTER TABLE public.genres OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16396)
-- Name: genres_genreid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.genres_genreid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genres_genreid_seq OWNER TO postgres;

--
-- TOC entry 3307 (class 0 OID 0)
-- Dependencies: 200
-- Name: genres_genreid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.genres_genreid_seq OWNED BY public.genres.genreid;


--
-- TOC entry 205 (class 1259 OID 16420)
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    movieid integer NOT NULL,
    title character varying(50) NOT NULL,
    description character varying(1000),
    directorid integer NOT NULL,
    genreid integer NOT NULL,
    imgurl character varying(300),
    featured boolean
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16418)
-- Name: movies_movieid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movies_movieid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movies_movieid_seq OWNER TO postgres;

--
-- TOC entry 3308 (class 0 OID 0)
-- Dependencies: 204
-- Name: movies_movieid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movies_movieid_seq OWNED BY public.movies.movieid;


--
-- TOC entry 209 (class 1259 OID 16449)
-- Name: user_movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_movies (
    usermovieid integer NOT NULL,
    userid integer,
    movieid integer
);


ALTER TABLE public.user_movies OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16447)
-- Name: user_movies_usermovieid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_movies_usermovieid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_movies_usermovieid_seq OWNER TO postgres;

--
-- TOC entry 3309 (class 0 OID 0)
-- Dependencies: 208
-- Name: user_movies_usermovieid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_movies_usermovieid_seq OWNED BY public.user_movies.usermovieid;


--
-- TOC entry 207 (class 1259 OID 16441)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    userid integer NOT NULL,
    name character varying(50),
    username character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    birthdate date
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16439)
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_userid_seq OWNER TO postgres;

--
-- TOC entry 3310 (class 0 OID 0)
-- Dependencies: 206
-- Name: users_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.userid;


--
-- TOC entry 3143 (class 2604 OID 16412)
-- Name: directors directorid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.directors ALTER COLUMN directorid SET DEFAULT nextval('public.directors_directorid_seq'::regclass);


--
-- TOC entry 3142 (class 2604 OID 16401)
-- Name: genres genreid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genres ALTER COLUMN genreid SET DEFAULT nextval('public.genres_genreid_seq'::regclass);


--
-- TOC entry 3144 (class 2604 OID 16423)
-- Name: movies movieid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies ALTER COLUMN movieid SET DEFAULT nextval('public.movies_movieid_seq'::regclass);


--
-- TOC entry 3146 (class 2604 OID 16452)
-- Name: user_movies usermovieid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_movies ALTER COLUMN usermovieid SET DEFAULT nextval('public.user_movies_usermovieid_seq'::regclass);


--
-- TOC entry 3145 (class 2604 OID 16444)
-- Name: users userid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN userid SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- TOC entry 3294 (class 0 OID 16409)
-- Dependencies: 203
-- Data for Name: directors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.directors (directorid, name, bio, birthyear, deathyear) VALUES (1, 'Peter Jackson', 'Peter Jackson is a New Zealand film director, producer, and screenwriter. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien. He is the third-highest-grossing film director of all time, his films having made over $6.5 billion worldwide.', '1961-10-31', NULL);
INSERT INTO public.directors (directorid, name, bio, birthyear, deathyear) VALUES (2, 'Steven Soderbergh', 'Steven Soderbergh is an American film director, producer, screenwriter, cinematographer, and editor. An early pioneer of modern independent cinema, Soderbergh is an acclaimed and prolific filmmaker.', '1963-01-14', NULL);
INSERT INTO public.directors (directorid, name, bio, birthyear, deathyear) VALUES (3, 'Taika Waititi', 'Taika Waititi is a New Zealand film and television director, producer, screenwriter, actor, and comedian. He is the recipient of an Academy Award and a Grammy Award, as well as two Primetime Emmy Award nominations.', '1975-09-16', NULL);
INSERT INTO public.directors (directorid, name, bio, birthyear, deathyear) VALUES (4, 'Ben Stiller', 'Ben Stiller is an American actor, comedian, producer, film director, and screenwriter. He is the son of the late comedians and actors Jerry Stiller and Anne Meara.', '1965-11-30', NULL);
INSERT INTO public.directors (directorid, name, bio, birthyear, deathyear) VALUES (5, 'Mel Brooks', 'Mel Brooks is an American director, writer, actor, comedian, producer, and composer. He is known as a creator of broad film farces and comedic parodies.', '1926-06-28', NULL);


--
-- TOC entry 3292 (class 0 OID 16398)
-- Dependencies: 201
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.genres (genreid, name, description) VALUES (1, 'action', 'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero.');
INSERT INTO public.genres (genreid, name, description) VALUES (2, 'comedy', 'Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.');
INSERT INTO public.genres (genreid, name, description) VALUES (3, 'adventure', 'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in adventure films, sometimes as big as the characters themselves.');
INSERT INTO public.genres (genreid, name, description) VALUES (4, 'fantasy', 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.');
INSERT INTO public.genres (genreid, name, description) VALUES (5, 'thriller', 'Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety.');


--
-- TOC entry 3296 (class 0 OID 16420)
-- Dependencies: 205
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (1, 'Lord of the Rings: Fellowship of the Ring', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', 1, 3, 'https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976?ref_=tt_ov_i', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (2, 'Lord of the Rings: The Two Towers', 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron''s new ally, Saruman, and his hordes of Isengard.', 1, 3, 'https://www.imdb.com/title/tt0167261/mediaviewer/rm306845440?ref_=tt_ov_i', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (3, 'Lord of the Rings: The Return of the King', 'Gandalf and Aragorn lead the World of Men against Sauron''s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', 1, 3, 'https://www.imdb.com/title/tt0167260/mediaviewer/rm584928512?ref_=tt_ov_i', true);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (4, 'The Hobbit: An Unexpected Journey', 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.', 1, 4, 'https://www.imdb.com/title/tt0903624/mediaviewer/rm3577719808?ref_=tt_ov_i', false);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (5, 'The Hobbit: The Desolation of Smaug', 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.', 1, 4, 'https://www.imdb.com/title/tt1170358/mediaviewer/rm2431898112?ref_=tt_ov_i', false);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (6, 'The Hobbit: The Battle of the Five Armies', 'Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.', 1, 4, 'https://www.imdb.com/title/tt2310332/mediaviewer/rm2908996864?ref_=tt_ov_i', false);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (7, 'Ocean''s Eleven', 'Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.', 2, 5, 'https://www.imdb.com/title/tt0240772/mediaviewer/rm3370325760?ref_=tt_ov_i', false);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (8, 'Thor Ragnarok', 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.', 3, 1, 'https://www.imdb.com/title/tt3501632/mediaviewer/rm1413491712?ref_=tt_ov_i', false);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (9, 'The Secret Life of Walter Mitty', 'When both he and a colleague are about to lose their job, Walter takes action by embarking on an adventure more extraordinary than anything he could have ever imagined.', 4, 3, 'https://www.imdb.com/title/tt0359950/mediaviewer/rm2806567680?ref_=tt_ov_i', false);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (10, 'Spaceballs', 'A star-pilot for hire and his trusty sidekick must come to the rescue of a princess and save Planet Druidia from the clutches of the evil Spaceballs.', 5, 2, 'https://www.imdb.com/title/tt0094012/mediaviewer/rm1505431040?ref_=tt_ov_i', false);
INSERT INTO public.movies (movieid, title, description, directorid, genreid, imgurl, featured) VALUES (11, 'Robin Hood: Men in Tights', 'A spoof of Robin Hood in general, and Robin Hood: Prince of Thieves (1991) in particular.', 5, 2, 'https://www.imdb.com/title/tt0107977/mediaviewer/rm2738834432?ref_=tt_ov_i', false);


--
-- TOC entry 3300 (class 0 OID 16449)
-- Dependencies: 209
-- Data for Name: user_movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (1, 1, 1);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (2, 1, 2);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (3, 1, 3);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (4, 1, 4);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (5, 1, 5);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (6, 1, 6);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (7, 1, 8);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (8, 1, 9);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (9, 1, 10);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (10, 2, 4);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (11, 2, 5);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (12, 2, 6);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (13, 2, 8);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (14, 3, 7);
INSERT INTO public.user_movies (usermovieid, userid, movieid) VALUES (15, 3, 10);


--
-- TOC entry 3298 (class 0 OID 16441)
-- Dependencies: 207
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (userid, name, username, password, email, birthdate) VALUES (1, 'Peyton Crantford', 'pcranfrd', 'test123!', 'pcranfrd@gmail.com', '1994-11-21');
INSERT INTO public.users (userid, name, username, password, email, birthdate) VALUES (2, 'Nikki Loseman', 'nloseman', 'test234!', 'nloseman@gmail.com', '1995-07-27');
INSERT INTO public.users (userid, name, username, password, email, birthdate) VALUES (3, 'Jackson Crantford', 'jcranfrd', 'test345!', 'jcranfrd@gmail.com', '1993-10-05');


--
-- TOC entry 3311 (class 0 OID 0)
-- Dependencies: 202
-- Name: directors_directorid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.directors_directorid_seq', 5, true);


--
-- TOC entry 3312 (class 0 OID 0)
-- Dependencies: 200
-- Name: genres_genreid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.genres_genreid_seq', 5, true);


--
-- TOC entry 3313 (class 0 OID 0)
-- Dependencies: 204
-- Name: movies_movieid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_movieid_seq', 11, true);


--
-- TOC entry 3314 (class 0 OID 0)
-- Dependencies: 208
-- Name: user_movies_usermovieid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_movies_usermovieid_seq', 15, true);


--
-- TOC entry 3315 (class 0 OID 0)
-- Dependencies: 206
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_userid_seq', 3, true);


--
-- TOC entry 3150 (class 2606 OID 16417)
-- Name: directors directors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.directors
    ADD CONSTRAINT directors_pkey PRIMARY KEY (directorid);


--
-- TOC entry 3148 (class 2606 OID 16406)
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (genreid);


--
-- TOC entry 3152 (class 2606 OID 16428)
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (movieid);


--
-- TOC entry 3156 (class 2606 OID 16454)
-- Name: user_movies user_movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_movies
    ADD CONSTRAINT user_movies_pkey PRIMARY KEY (usermovieid);


--
-- TOC entry 3154 (class 2606 OID 16446)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);


--
-- TOC entry 3158 (class 2606 OID 16434)
-- Name: movies directorykey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT directorykey FOREIGN KEY (directorid) REFERENCES public.directors(directorid);


--
-- TOC entry 3157 (class 2606 OID 16429)
-- Name: movies genrekey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT genrekey FOREIGN KEY (genreid) REFERENCES public.genres(genreid);


--
-- TOC entry 3160 (class 2606 OID 16460)
-- Name: user_movies moviekey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_movies
    ADD CONSTRAINT moviekey FOREIGN KEY (movieid) REFERENCES public.movies(movieid);


--
-- TOC entry 3159 (class 2606 OID 16455)
-- Name: user_movies userkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_movies
    ADD CONSTRAINT userkey FOREIGN KEY (userid) REFERENCES public.users(userid);


-- Completed on 2021-04-28 10:59:50 MDT

--
-- PostgreSQL database dump complete
--

