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
  const {content, isRebuttal} = req.body
  console.log("this is the post route: ", req.body);
      const newComment = {
                  'content': "comment",
                  'isRebuttal': true,
                  'userId': 1,
                  'postId': 5
      }
      db.comments.create(newComment).then(function(comment) {
        return res.json(comment);
      }).catch(function (err) {
        console.log("findOne Error: ", err);
      });
})


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
}
