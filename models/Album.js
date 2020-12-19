// Schemas allow us to tell MongoDB what kind of data we will send, looks like JSON data

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
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
  group_ID: {
    type: Schema.Types.ObjectId, ref: 'Groups',
    required: true
  },
});

module.exports = mongoose.model("Albums", AlbumSchema);