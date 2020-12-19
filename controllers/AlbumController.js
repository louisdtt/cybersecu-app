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

exports.readAlbum = (req, res) => {
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
  Album.deleteOne({ _id: req.params.albumid }, (err, album) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Album successfully deleted" });
  });
};

// Find all albums by a group ID

exports.findByGroupId = (req, res) => {
    Album.find({ group_ID : req.params.groupId })
    .exec(function (err, albums) {
      if (err){
        if(err.kind === 'ObjectId') {
          return res.status(404).send({
            message: "Albums not found with given group Id " + req.params.groupId
          });                
        }
        return res.status(500).send({
          message: "Error retrieving Albums with given group Id " + req.params.groupId
        });
      }
          
      res.status(200).json(albums);
  });
};
