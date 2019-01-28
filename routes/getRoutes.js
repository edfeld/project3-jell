const db = require("../models");

module.exports = function(app) {

    //Searches for all posts with requested tags
    app.get("/api/search", function(req, res) {
        console.log(req.body.sent, "this is req.body")
        db.posts
            .findAll({
                where: {
                    tags: req.body.sent
                },
                include: [{model: db.comments, as: 'comments'}]    
            })
            .then(function(searchResults){
                console.log(searchResults);
                res.json(searchResults);
                
            });
    });

    //gets all of the posts
    app.get("/api/search/all", function(req, res) {
        // console.log("this is the passport user ", req.session.passport)
        db.posts.findAll({
            include: [{model: db.comments, as: 'comments'}]
        }
        ).then(function(result) {
            res.json(result);
        });
    });

    //gets n posts with an offset of j support for pagination
    app.get("/api/search/:n/:j", function(req, res) {
        db.posts.findAll({
            limit: req.params.n, 
            offset: req.params.j
        }).then(function(result){
            res.json(result);
        });
    });

    //retrieves info for all info for a single user
    app.get("/api/user/:id", function(req, res) {
        db.users.findOne(
            {
                //need to adjust to exclude personal info
                attributes: ['username', 'userType', 'badges', 'createdAt'],
                where: {id: req.params.id},
                include: [{model: posts, as: 'posts'},
                          {model: comments, as: 'comments'}]
            }).then(function(result) {
                res.json(result);
            });
    });

    //Get post and then get all top level associated comments
    app.get("/api/post/:id", function(req, res) {
        db.posts.findOne({
            where: {id: req.params.id},
            //only get certain user attributes for security
            include: [{
                model: users, as: 'user', 
                attributes: ['username', 'userType', 'badges', 'createdAt']
            }]
        }).then(function(result) {
            let post = result;
            db.comments.findAll({
                where: {
                          postId: req.params.id,
                          isChild: false
                       },
                include: [{
                    model: users, as: 'user', 
                    attributes: ['username', 'userType', 'badges', 'createdAt']
                }]
            }).then(function(result) {
                let fin = {post: post, comments: result};
                res.json(fin);
            });
        });
    })


    //gets n posts with an offset of j support for pagination orders by upvotes
    app.get("/api/top-posts/:n/:j", function(req, res) {
        db.posts.findAll({
            limit: req.params.n, 
            offset: req.params.j,
            order:  sequelize.fn('max', sequelize.col('upVotes'))
        }).then(function(result){
            res.json(result);
        });
    });

    //gets the children specified for a comment
    app.get("/api/comments/children/:children", function (req, res) {
        let children = req.params.children.split(':');
        children = children.map(id => parseInt(id));
        db.comments.findAll(
            {
                where: {
                    isChild: true,
                    _id : {$in: children}
                },
                include: [{
                    model: users, as: 'user', 
                    attributes: ['username', 'userType', 'badges', 'createdAt']
                }]
            }).then(function(result) {
                res.json(result);
            })
    });


}