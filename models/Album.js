// Schemas allow us to tell MongoDB what kind of data we will send, looks like JSON data

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  musicList: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  groupID: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Albums", AlbumSchema);