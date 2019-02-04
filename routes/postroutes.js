const db = require("../models");

module.exports = function(app){

app.post('/api/postRoute', (req, res) => {
    const {title, context, tags, userId} = req.body
    console.log("this is the post route: ", req.body);
				const newPost = {
                    'title': title,
                    'context': context,
                    'tags': tags,
                    'userId': userId
				}
				db.posts.create(newPost).then(function(post) {
					return res.json(post);
				}).catch(function (err) {
	console.log("findOne Error: ", err);
  });
});

app.post('/api/commentRoute', (req, res) => {
  const {content, isRebuttal, userId, isChild, postId} = req.body
  console.log("this is the comment route: ", req.body);
      const newComment = {
                  'content': content,
                  'isRebuttal': isRebuttal,
                  'userId': userId,
                  'postId': postId,
                  isChild: isChild
      }
      db.comments.create(newComment).then(function(comment) {
        return res.json(comment);
      }).catch(function (err) {
        console.log("findOne Error: ", err);
      });
})

}
