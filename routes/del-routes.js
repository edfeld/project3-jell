var db = require("../models");


//TODO: add destroy mechanics so that the post deletes associated comments or blanks their contents

module.exports = function(app) {

    //deletes user 
    app.delete("/api/delete/user/:id", function(req, res) {
        db.user.destroy(
            {
              Where: {_id: req.params.id}
            }
          ).then(function(result) {
            console.log("User Deleted: ", result);
        });
    });

    //deletes post
    app.delete("/api/delete/post/:id", function(req, res) {
        db.posts.destroy(
            {
              Where: {_id: req.params.id}
            }
          ).then(function(result) {
            console.log("Post Deleted: ", result);
        });
    });

    //deletes comment
<<<<<<< HEAD
    app.delete("/api/delete/post/:id", function(req, res) {
        db.comment.destroy()
        .then(function(result) {
            console.log("");
        });
    });
=======
    app.delete("/api/delete/comment/:id", function(req, res) {
        db.comment.destroy(
            {
              Where: {_id: req.params.id}
            }
          ).then(function(result) {
            console.log("Comment Deleted: ", result);
        });
    })
>>>>>>> 5ad77a6fad1c5d0bf610a291db41341cd10327db

};