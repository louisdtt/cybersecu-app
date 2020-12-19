// API endpoints for albums

module.exports = function(app) {

    const AlbumController = require("../controllers/AlbumController");
	
    app
     .route("/albums")
     .get(AlbumController.listAllAlbums)
     .post(AlbumController.createNewAlbum);
  
    app
     .route("/albums/:albumid")
     .get(AlbumController.readAlbum)
     .put(AlbumController.updateAlbum)
     .delete(AlbumController.deleteAlbum);

     app
     .get('/albums/groups/:groupsId', AlbumController.findByGroupId);

}