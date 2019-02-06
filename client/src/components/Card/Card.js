import React from 'react';
import "./Card.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Card = props => {
const key = props.data.id;
// console.log("my key::::::::::::::::::;>", key); 
return(
<Link to='/fullpost' key={key} onClick={() => props.selectPostID(key)}  className="wholeCard">
    <header className="card">
        <div className="card-body">
            <h1 className="card-title">{props.data.title}</h1>
            <p className="card-subtitle mb-2">{props.data.context}</p>
            <p className="card-text">Tags: {props.data.tags}</p>
            <span>Up Votes: {props.data.upVotes}/Down Votes: {props.data.downVotes}</span>
            {/* <div> 
                <button onClick={() => props.upvote(key)}>Up Vote</button>
                <button onClick={() => props.downvote(key)}>Down Vote</button>
            </div> */}
        </div>
    </header>
</Link>
)
};

export default Card;