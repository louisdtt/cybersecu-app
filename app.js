const express = require('express');
const bodyParser = require("body-parser");

// Controllers checking
const AlbumController = require("./controllers/AlbumController");
const GroupController = require("./controllers/GroupController");

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


// API Endpoints for albums

app
  .route("/albums")
  .get(AlbumController.listAllAlbums)
  .post(AlbumController.createNewAlbum);

app
  .route("/albums/:albumid")
  .get(AlbumController.readAlbum)
  .put(AlbumController.updateAlbum)
  .delete(AlbumController.deleteAlbum);

// API Endpoints for groups

app
  .route("/groups")
  .get(GroupController.listAllGroups)
  .post(GroupController.createNewGroup);

app
  .route("/groups/:groupid")
  .get(GroupController.readGroup)
  .put(GroupController.updateGroup)
  .delete(GroupController.deleteGroup);


// Starting the app

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);