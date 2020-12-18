// Allow easy connection with MongoDB
const mongoose = require("mongoose");

// Handling environment variables
const dotenv = require("dotenv");
dotenv.config()

// URI to connect to the database
const dbURI = process.env.MONGO_URI

// Mongo DB settings

const options = {
    poolSize: 10,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
  
// Connect to remote database

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established !");
  },
  err => {
    console.log("Error connecting to Database : ", err);
  }
);

// Require every models

require("../models/Album");
require("../models/Group");
require("../models/User");