import React from 'react';
import Badge from '../../components/Badges'

const PostComments = props =>{
   const key = props.data.id;
   const badges = props.data.user.badges.split(':');
   console.log("badges", badges);
   return (
   <div key={key}>
        <header className="card" style={{display: 'inline-flex', width: '75%', margin: '1rem'}}>
        <div className="card-body">
            <h6>Username:</h6>
            <h2 className="card-title">{props.data.user.username}</h2>
            {badges.map(badge => (
                <Badge badge={badge}></Badge>
            ))}
            <h6>Response:</h6>
            <h4 className="card-text">{props.data.content}</h4>
            <p><button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>Up Votes: {props.data.upVotes}/<button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>Down Votes: {props.data.downVotes}</p>
        </div>
    </header>
   </div>
   );
};

export default PostComments;