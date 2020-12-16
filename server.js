const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// Import routes
let apiRoutes = require("./api-routes")// Use Api routes in the App

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', apiRoutes)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);