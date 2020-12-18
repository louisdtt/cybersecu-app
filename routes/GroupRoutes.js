// API endpoints for groups

module.exports = function(app) {

    const GroupController = require("../controllers/GroupController");

    app
     .route("/groups")
     .get(GroupController.listAllGroups)
     .post(GroupController.createNewGroup);

    app
     .route("/groups/:groupid")
     .get(GroupController.readGroup)
     .put(GroupController.updateGroup)
     .delete(GroupController.deleteGroup);

}