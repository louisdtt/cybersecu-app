const express = require('express');
const bodyParser = require("body-parser");

// DB instance connection
require("./config/db");

// Constants for URL
const PORT = 8080;

// App initialization
const app = express();

// Body parser allow to easily read JSON content
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API routes
require('./routes/AlbumRoutes')(app);
require('./routes/GroupRoutes')(app);

// Starting the app
app.listen(PORT);