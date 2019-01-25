const db = require("../db");

module.exports = function(app){

app.post('/api/postRoute', (req, res) => {
    const {title, context, tags} = req.body
    console.log("this is the post route: ", req.body);
				const newPost = {
                    'title': title,
                    'context': context,
                    'tags': tags,
                    userId: 1
				}
				db.posts.create(newPost).then(function(post) {
					return res.json(post);
				}).catch(function (err) {
	console.log("findOne Error: ", err);
  });
})
}