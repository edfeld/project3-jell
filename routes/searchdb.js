const db = require("../db");

module.exports = function(app) {
    app.get("/api/search", function(req, res) {
        console.log(req.body.data)
        db.posts
            .findAll({
                where: {
                    tags: "debate"
                }
            })
            .then(function(searchResults){
                console.log(searchResults[0].dataValues.title)
                res.json(searchResults)
                
            });
    });
}