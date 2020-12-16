const express = require('express');
const bodyParser = require("body-parser");

// Controllers checking
const AlbumController = require("./controllers/AlbumController");

// DB instance connection
require("./config/db");

// Constants for URL
const PORT = 8080;
const HOST = 'localhost';

// App initialization
const app = express();

// Body parser allow to easily read JSON content
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// API Endpoints

app
  .route("/albums")
  .get(AlbumController.listAllAlbums)
  .post(AlbumController.createNewAlbum);

app
  .route("/albums/:albumid")
  .get(AlbumController.readAlbum)
  .put(AlbumController.updateAlbum)
  .delete(AlbumController.deleteAlbum);


// Starting the app
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);