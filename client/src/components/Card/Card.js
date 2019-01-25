import React from 'react';
import "./Card.css";

const Card = props => (
<a href="#" className="wholeCard">
    <header className="card">
{/* <div class="flex-container"> */}
<div className="card-body">
        <h2 className="card-title">{props.data.title}</h2>
        <h5 className="card-subtitle mb-2">{props.data.context}</h5>
        <p className="card-text">Tags: {props.data.tags}</p>
       
    </div>
{/* </div> */}
    </header>
</a>
);

export default Card;