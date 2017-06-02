# web-apis - Patrick Porche #minute-sifaka

# Getting Started

#### How to Install

Install all dependencies in package.json

`$ npm install`

For more information regarding dependencies refer to the documentation at the following sites.

[body-parser](https://www.npmjs.com/package/body-parser-json)<br>
[express](https://www.npmjs.com/package/express)<br>
[morgan](https://www.npmjs.com/package/morgan)<br>
[nodemon](https://www.npmjs.com/package/nodemon)<br>
[pg](https://www.npmjs.com/package/pg)<br>
[pg-promise](https://www.npmjs.com/package/pg-promise)

#### How to Setup and Configure the Database

Run the following scripts in the command line to setup databases

`$ npm run create-db`

`$ npm run seed-db`

#### How to Run the Server

Run the following script in the command line to start the server

`$ npm run start`

#### Heroku Website Link and API

[https://patrick-porche-web-apis.herokuapp.com/](https://patrick-porche-web-apis.herokuapp.com/)

##### Routes Definitions

###### Artists

```javascript
// get all artists
// GET \ /artists

// get artist by id
// GET \ /artists/:id

// get artists by name
// GET \ /artists/name/:name

// create a new artist
// POST \ /new/:artist/:genre

// edit an artists name
// PUT \ /edit/:artist/:newArtist

// delete and artist
// DELETE \ /delete/:artist
```
###### Albums

```javascript
// get all albums
// GET \ /albums

// get albums by id
// GET \ /albums/:id

// get albums by name
// GET \ /albums/name/:name

// create a new album
// POST \ /new/:album/:year

// edit an albums name
// PUT \ /edit/:album/:newAlbum

// delete album
// DELETE \ /delete/:album
```
###### Songs

```javascript
// get all songs
// GET \ /songs

// get song by id
// GET \ /songs/:id

// get song by album
// GET \ /albums/name/:album_id

// get song by artist
// GET \ /new/:album/:artist_id

// create a new song
// POST \ /new/:title/:length/:track_no

// edit a songs name
// PUT \ /edit/:song/:newSong

// delete song
// DELETE \ /delete/:song
```

###### Playlists

```javascript
// get all playlists
// GET \ /playlists

// get a playlist by id
// GET \ /playlists/:id

// get all songs in a playlist
// GET \ /songs/:title

// add a song to a playlist
// PATCH \ /new/song/:playlist/:song

// create a new playlist
// POST \ /new/:title/:songs

// edit a playlist
// PUT \ /edit/:playlist/:newPlaylist

// delete playlist
// DELETE \ /delete/:playlist 
```

# Description

Build a web API for the music player database that you started working on in Init 4: Relational Databases.

In this goal, you’ll be putting all of the skills you’ve learned so far together to create a RESTful web API: JavaScript, Node.js, web servers with Express, and databases.

When you’re done, you’ll have a RESTful web API allowing consumers of the API to manage artists, albums, songs, and playlists on your music player app.

What is an API, you ask? API stands for Application Programming Interface. It’s a technical way of saying “the list of things you can tell a program to do”.

So, in the case of this application, your program is the music player application. It manages a music database containing artists, albums, songs, and playlists. The “list of things you can tell it to do” will include things like:

- Get me all the artists
- Get me songs in album X
- Get me all songs in the playlist Y
- Add a new album by artist X with title Y
- Edit the name of song X
- Delete song X from playlist Y

The API part is just the way to talk to and use a program, and you actually use APIs all the time. Whenever you use a module in Node.js, you are using that module’s API. Whenever you install and use a package from npm, you use that package’s API. The set of things that you can do with the DOM in the browser is called the DOM API.

When you build a web API, you’re providing a way to talk to a program through the internet using the HTTP protocol. That’s what you’re doing when you use the Twitter or GitHub web APIs.

Take a look at the resources provided for more background, guidance, and support in learning how to build web APIs with Node.js, Express, and PostgreSQL.

## Terms & Concepts

Each day, pay attention to the terms & concepts highlighted in bold. By the end of the day, you should have a better idea of what they mean and how to use them. In other words, aim to be able to answer the question “what is X?” for yourself.

- [x] API (Application Programming Interface)
- [x] REST (Representational State Transfer) and RESTful design
- [x] HTTP request
- [x] HTTP response
- [x] HTTP request/response body and head
- [x] HTTP request methods: GET, POST, PUT/PATCH, DELETE (also called request verbs)
- [x] Web server
- [x] API client or consumer
- [x] Runtime environment: (common ones: development, production, test)
- [x] Deployment to a remote server
- [x] Database connection
- [x] Database query and query results
- [x] JSON data (JavaScript Object Notation)

# Context

The series of refresher goals are designed for members of Learners Guild to challenge themselves to see what they can accomplish on their own.

# Specifications

These are the basic specs for “Web APIs”. If you complete these specs, try taking on some of the Stretch specs.

### General

- [x] Artifact is a repo on GitHub
- [x] Repo includes an Express.js app
- [x] App provide a command to start the web server
- [x] README includes “Getting Started” instructions
- [x] “Getting Started” instructs how to install
- [x] “Getting Started” instructs how to set up and configure the database
- [x] “Getting Started” instructs how to start the server
- [x] The artifact produced is properly licensed, preferably with the MIT license

### Database

- [x] App uses PostgreSQL for data persistence
- [x] Database can store data about artists, albums, songs, and playlists
- [ ] Database uses multiple tables with appropriate foreign keys
- [ ] Database uses join tables for any many-to-many relationships
- [x] Artists have a name and genre
- [x] Albums have a title, artist, and year
- [x] Songs have a title, album, length (in seconds), and track number
- [x] Playlists have a title and are associated with a list of songs

### API Specs

- [x] API employs a RESTful design
- [x] API returns JSON-formatted data
- [x] API accepts POST and PUT/PATCH requests with JSON-formatted bodies

### Users of the API can…

- [x] Get all artists
- [x] Get an artist by id
- [x] Get an artist by name
- [x] Add a new artist
- [x] Edit an artist
- [x] Delete an artist
- [x] Get all albums
- [x] Get an album by id
- [x] Get an album by title
- [x] Add a new album
- [x] Edit an album
- [x] Delete an album
- [x] Get all songs
- [x] Get a song by id
- [x] Get all songs in an album
- [x] Get all songs by an artist
- [x] Add a new song
- [x] Edit a song
- [x] Delete a song
- [x] Get all playlists
- [x] Get a playlist by id
- [x] Get all songs in a playlist
- [x] Add a song to a playlist
- [x] Create a playlist
- [x] Edit a playlist
- [x] Delete a playlist

### Deployment

- [x] App is deployed to Heroku
- [x] Link to deployed app is added to README
- [x] Deployed app uses Heroku Postgres for persistence
- [x] Deployed app provides the same API functionality as local version

### Stretch

If you complete all of the specs listed above (the checkboxes), there’s no reason to stop there! Try building more advanced features with these stretch specs.

### Users, Authentication & Authorization

- [ ] Music player API requires authentication with username and password
- [ ] API provides ways for users to “sign in” and “sign out”
- [ ] Users have their own “library” of albums and playlists
- [ ] Users can only see and interact with music in their own library

### Music Player UI

- [ ] App provides a single-page web UI.
- [ ] UI uses JavaScript to fetch and send data from/to the API.
- [ ] UI provides ways for users to view, create, edit, and delete Artists
- [ ] UI provides ways for users to view, create, edit, and delete Albums
- [ ] UI provides ways for users to view, create, edit, and delete Songs
- [ ] UI provides ways for users to view, create, edit, and delete Playlists

### Your Choice API

Pick another resource to build an API around. For example: a store with products in categories; an organization roster with employees and teams; a newspaper with articles, editions and writers.

- [ ] App provides a RESTful JSON API
- [ ] API manages at least 3 types of “resources” (i.e. it has at least 3 distinct tables in the database)
- [ ] API allows users to read and create all 3 kinds of resources``
