import React from 'react';
import { Link } from 'react-router-dom'

const SearchPostCard = props => {
    console.log('userposts ', props)
    const key = props.data.id
    return (
    <Link to={'/api/post/' + key} key={key}>
         <header className="card" style={{display: 'inline-flex', width: '47%', margin: '1rem'}}>
         <div className="card-body">
             <h6>Title:</h6>
             <h2 className="card-title">{props.data.title}</h2>
             <h6>Context:</h6>
             <h4 className="card-text">{props.data.content}</h4>
             <p><button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>Up Votes: {props.data.upVotes}/<button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>Down Votes: {props.data.downVotes}</p>
         </div>
     </header>
    </Link>
    );
};

export default SearchPostCard;