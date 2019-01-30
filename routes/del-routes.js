const db = require("../models");

//TODO: add destroy mechanics so that the post deletes associated comments or blanks their contents

module.exports = function(app) {
    //deletes user 
    app.delete("/api/delete/user/:id", function(req, res) {
        // console.log("You got to the User Delete route!!! <<<<<=================id: ", req.params.id);
        db.users.destroy(
            {
              where: {id: req.params.id}
            }
          ).then(function(result) {
            console.log("User Deleted: ", result);
            res.status(200).json({rowsAffected: result});  // [ERE] 20190129 add res.status
        })
        .catch(err => {
            console.log("Catching error delete User Route: =======", err);
            // return done(err)
            res.json(err);
        });
    });

    //deletes post
    app.delete("/api/delete/post/:id", function(req, res) {
        // console.log("You got to the Posts Delete route!!! <<<<<=================id: ", req.params.id); 
        db.posts.destroy(
            {
              where: {id: req.params.id} //  [ERE] _id change to id. Where change to where
            }
          ).then(function(result) {
            console.log("User Deleted: ", result);
            res.status(200).json({rowsAffected: result});  // [ERE] 20190129 add res.status
        })
        .catch(err => {
            console.log("Catching error delete Post Route: =======", err);
            res.json(err);
        });
    });

    //deletes comment
    app.delete("/api/delete/comment/:id", function(req, res) {
        // console.log("You got to the Comments Delete route!!! <<<<<=================id: ", req.params.id); 
        db.comments.destroy(
            {
              where: {id: req.params.id}
            }
          ).then(function(result) {
            console.log("User Deleted: ", result);
            res.status(200).json({rowsAffected: result});  // [ERE] 20190129 add res.status
        })
        .catch(err => {
            console.log("Catching error delete User Route: =======", err);
            res.json(err);
        });
    })

};