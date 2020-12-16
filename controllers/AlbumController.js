const Album = require("../models/Album");

// List all albums from database

exports.listAllAlbums = (req, res) => {
  Album.find({}, (err, album) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(album);
  });
};

// Creating a new album and saving it to database

exports.createNewAlbum = (req, res) => {
  let newAlbum = new Album(req.body);
  newAlbum.save((err, album) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(album);
  });
};

// Read a particular album by _id

exports.readAlbum = (req, body) => {
  Album.findById(req.params.albumid, (err, album) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(album);
  });
};

// Update a particular album by _id 

exports.updateAlbum = (req, res) => {
  Album.findOneAndUpdate(
    { _id: req.params.albumid },
    req.body,
    { new: true },
    (err, album) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(album);
    }
  );
};

// Delete a particular album by _id 

exports.deleteAlbum = (req, res) => {
  Album.remove({ _id: req.params.albumid }, (err, album) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Album successfully deleted" });
  });
};