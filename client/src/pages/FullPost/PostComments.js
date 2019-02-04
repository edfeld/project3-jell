import React from 'react';
import Badge from '../../components/Badges'
import axios from 'axios';

function getChildren (children) {
    axios.get('/api/comments/children/'+ children)
    .then(function (result) {

    })
}

const PostComments = props =>{
   const key = props.data.id;
   const badges = props.data.user.badges.split(':');
   const children = props.data.children;
   var background;
   var type;
   if(props.data.isRebuttal){
        background = "linear-gradient(to bottom right,rgba(221, 18, 18, 0.855), rgba(17, 10, 51, 0.89))";
        type = "Rebuttal";
   } else {
       background = "linear-gradient(to bottom right,rgba(221, 109, 18, 0.856), rgba(0, 0, 0, 0.753))";
       type = "Concurrence";
   }

    return (
        <div key={key}>
                <header className="card" style={{display: 'inline-flex', width: '75%', margin: '1rem',  backgroundImage: {background}}}>
                <div className="card-body">
                    <h6 className="type">{type}</h6>
                    <h4 className="card-title">{props.data.user.username}</h4>
                    {badges.map(badge => (
                        <Badge badge={badge}></Badge>
                    ))}
                    <hr></hr>
                    <h5 className="card-text">{props.data.content}</h5>
                    <p>
                        <button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>
                        Up Votes: {props.data.upVotes}/<button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>
                        Down Votes: {props.data.downVotes}
                    </p>
                </div>
            </header>
        </div>
    );

};

export default PostComments;