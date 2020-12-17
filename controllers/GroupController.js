const Group = require("../models/Group");

// List all groups from database

exports.listAllGroups = (req, res) => {
  Group.find({}, (err, group) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(group);
  });
};

// Creating a new group and saving it to database

exports.createNewGroup = (req, res) => {
  let newGroup = new Group(req.body);
  newGroup.save((err, group) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(group);
  });
};

// Read a particular group by _id

exports.readGroup = (req, body) => {
  Group.findById(req.params.groupid, (err, group) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(group);
  });
};

// Update a particular group by _id 

exports.updateGroup = (req, res) => {
  Group.findOneAndUpdate(
    { _id: req.params.groupid },
    req.body,
    { new: true },
    (err, group) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(group);
    }
  );
};

// Delete a particular group by _id 

exports.deleteGroup = (req, res) => {
  Group.deleteOne({ _id: req.params.groupid }, (err, group) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Group successfully deleted" });
  });
};