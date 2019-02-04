const db = require("../models");

module.exports = function(app) {

    //Searches for all posts with requested tags
    app.get("/api/search/:tags", function(req, res) {
        console.log(req.params.tags)
        db.posts
            .findAll({
                where: {
                    tags: req.params.tags
                },
                include: [{model: db.comments, as: 'comments'}]    
            })
            .then(function(searchResults){
                console.log(searchResults);
                res.json(searchResults);
                
            });
    });

    //gets all of the posts
    app.get("/api/getall", function(req, res) {
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
            limit: parseInt(req.params.n), // [ere] add parseInt
            offset: parseInt(req.params.j) // [ere] add parseInt
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
                include: [{model: db.posts, as: 'posts'}, // [ere] prefix with db.
                          {model: db.comments, as: 'comments'}]
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
                model: db.users, as: 'user', 
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
                    model: db.users, as: 'user', 
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
        const { n, j } = req.params
        // console.log("n , J: ", n + " " + j)
        db.posts.findAll({
            order: [
            ['upVotes', 'DESC'], // Order by upvotes descending
            ]
        }).then(function(result){
            // console.log("slice results: ", result.slice(j, parseInt(j) + parseInt(n))); 
            res.json( result.slice(j, parseInt(j) + parseInt(n))); // slice the array to start at j and capture n elements
        });
    });
    // [ERE] function copy
    // app.get("/api/top-posts/:n/:j", function(req, res) {
    //     db.posts.findAll({
    //         limit: parseInt(req.params.n), 
    //         offset: parseInt(req.params.j),
    //         order:  sequelize.fn('max', sequelize.col('upVotes'))
    //     }).then(function(result){
    //         res.json(result);
    //     });
    // });

    //gets the children specified for a comment
    app.get("/api/comments/children/:children", function (req, res) {
        let children = req.params.children.split(':');
        children = children.map(id => parseInt(id));
        db.comments.findAll(
            {
                where: {
                    isChild: true,
                    id : {$in: children}
                },
                include: [{
                    model: db.users, as: 'user', 
                    attributes: ['username', 'userType', 'badges', 'createdAt']
                }]
            }).then(function(result) {
                res.json(result);
            })
    });


}