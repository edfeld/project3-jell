const db = require("../db");

module.exports = function(app) {
    app.get("/api/search/:tags", function(req, res) {
        db.post
            .findAll({
                where: {
                    tags: req.params.tags
                }
            })
            .then(function(searchResults){
                res.json(searchResults)
            });
    });
}