import React from 'react';
import "./userHead.css";
import { Link } from 'react-router-dom'

const UserPosts = props => {
    console.log('userposts ', props)
    const key = props.data.id
    return (
    <Link to='/fullpost' key={key} onClick={() => props.selectPostID(key)}>
         <header className="card" style={{display: 'inline-flex', width: '75%', margin: '1rem'}}>
         <div className="card-body">
             <h2 className="card-title">{props.data.title}</h2>
             <h4 className="card-text">{props.data.context}</h4>
             <p><button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>Up Votes: {props.data.upVotes}/<button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>Down Votes: {props.data.downVotes}</p>
         </div>
     </header>
    </Link>
    );
};

export default UserPosts;