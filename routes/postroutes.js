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

app.post('/api/commentRoute', (req, res) => {
  const {content, isRebuttal} = req.body
  console.log("this is the post route: ", req.body);
      const newComment = {
                  'content': "comment",
                  'isRebuttal': true,
                  'userId': 1,
                  'postId': 1
      }
      db.comments.create(newComment).then(function(comment) {
        return res.json(comment);
      }).catch(function (err) {
console.log("findOne Error: ", err);
});
})
}