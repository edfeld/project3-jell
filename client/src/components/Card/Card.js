import React from 'react';
import "./Card.css";

const Card = props => (
    <header className="card">
{/* <div class="flex-container"> */}
    <div className="card-body">
        <h2 className="card-title">Debate Title</h2>
        <h5 className="card-subtitle mb-2">Debate Topic</h5>
        <p className="card-text">Quick Debate Snippet</p>
        <a href="#" className="card-link">View Full Debate</a>
        <a href="#" className="card-link">Another link</a>
    {/* </div> */}
</div>
    </header>
);

export default Card;