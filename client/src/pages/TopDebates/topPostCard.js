import React from 'react';
import { Link } from 'react-router-dom'

const TopPostCard = props => {
    console.log('userposts ', props)
    const key = props.data.id
    return (
    <Link to={'/api/post/' + key} key={key}>
         <header className="card" style={{display: 'inline-flex', width: '75%', margin: '1rem'}}>
         <div className="card-body">
             <h6>Username:</h6>
             <h2 className="card-title">{props.data.title}</h2>
             <h6>Response:</h6>
             <h4 className="card-text">{props.data.content}</h4>
             <p><button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>Up Votes: {props.data.upVotes}/<button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>Down Votes: {props.data.downVotes}</p>
         </div>
     </header>
    </Link>
    );
};

export default TopPostCard;