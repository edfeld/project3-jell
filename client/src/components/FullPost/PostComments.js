import React from 'react';


const PostComments = props =>{
   console.log('this is the comments ',props)
   const key = props.data.id
   return (
   <div key={key}>
        <header className="card" style={{display: 'inline-flex', width: '75%'}}>
        <div className="card-body">
            <h2 className="card-title">{props.data.user.username}</h2>
            <h5 className="card-subtitle mb-2">{props.data.isRubuttal}</h5>
            <p className="card-text">{props.data.content}</p>
            <p className="card-text">Up Votes: {props.data.upVotes}/Down Votes: {props.data.downVotes}</p>
            <div> 
                <button onClick={() => props.upvote}>Up Vote</button>
                <button onClick={() => props.downvote}>Down Vote</button>
            </div>
        </div>
    </header>
   </div>
   );
};

export default PostComments;