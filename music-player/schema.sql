CREATE TABLE artists (
id  INTEGER,
name TEXT,
genre TEXT
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  artist_id INTEGER,
  title TEXT,
  year INTEGER
);

CREATE TABLE songs (
  id INTEGER,
  title TEXT,
  album_id INTEGER,
  length INTEGER,
  track_no INTEGER
);

CREATE TABLE playlists ();
