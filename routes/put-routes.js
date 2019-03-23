const db = require("../models");

module.exports = function(app) {

    //updates User information
    app.put("/api/update/user/:id", function(req, res) {
        // console.log("req.body", req.body);
        db.users.update(req.body, {where : {id: req.params.id}})
        .then(function(result) {
            console.log("User updated", req.body);
            res.json(result);
        });
    });

    //updates Post information
    app.put("/api/update/post/:id", function(req, res) {
        db.posts.update(req.body, {where: {id: req.params.id}})
        .then(function(result) {
            console.log("Post updated", req.body);
            res.json(result);
        });
    });

    //updates Comment information
    app.put("/api/update/comment/:id", function(req, res) {
        db.comments.update(req.body, {where: {id: req.params.id}})
        .then(function(result) {
            console.log("Comment updated", req.body);
            res.json(result);
        });
    });

    //Update Post with upvote
    app.put("/api/upvote", function(req, res) {
        const {post, upvotes} = req.body;
        db.posts.update({
          upVotes: upvotes,
        }, {
          where: {
            id: post
          }
        })
          .then(function(result) {
            console.log("upVoteAdded ", result);
            res.json(req.body);
        });
      });
      
      //Update Post with downvote
      app.put("/api/downvote", function(req, res) {
        const {post, downvotes} = req.body;
        db.posts.update({
          downVotes: downvotes
        }, {
          where: {
            id: post
          }
        })
          .then(function(result) {
            console.log("DownVoteAdded ", req.body);
            res.json(result);
        });
      });

      app.put("/api/commentdownvote", function(req, res) {
        const {comment, downvotes} = req.body;
        db.comments.update({
          commnetdownVotes: downvotes
        }, {
          where: {
            id: comment
          }
        })
          .then(function(result) {
            console.log("DownVoteAdded ", req.body);
            res.json(result);
        });
      });


}