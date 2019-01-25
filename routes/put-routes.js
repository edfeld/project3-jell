const db = require("../db");

module.exports = function(app) {

    //updates User information
    app.put("/api/update/user/:id", function(req, res) {
        db.users.update(req.body, {where : {_id: req.params.id}})
        .then(function(result) {
            console.log("User updated", req.body);
            res.json(result);
        });
    });

    //updates Post information
    app.put("/api/update/post/:id", function(req, res) {
        db.posts.update(req.body, {where: {_id: req.params.id}})
        .then(function(result) {
            console.log("Post updated", req.body);
            res.json(result);
        });
    });

    //updates Comment information
    app.put("/api/update/user/:id", function(req, res) {
        db.comments.update(req.body, {where: {_id: req.params.id}})
        .then(function(result) {
            console.log("Comment updated", req.body);
            res.json(result);
        });
    });


}