var db = require("../models");


module.exports = function(app) {

    //deletes user 
    app.delete("/api/delete/user/:id", function(req, res) {
        db.user.destroy()
        
        .then(function(result) {
            console.log("");
        });
    });

    //deletes post
    app.delete("/api/delete/post/:id", function(req, res) {
        db.posts.destroy()
        .then(function(result) {
            console.log("");
        });
    });

    //deletes comment
    app.delete("/api/delete/post/:id", function(req, res) {
        db.comment.destroy()
        .then(function(result) {
            console.log("");
        })
    })

};