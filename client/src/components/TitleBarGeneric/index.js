import React from 'react';
import "./titleBarGeneric.css";

const titleBarGeneric = props => (
    <header className="titleBar">
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.lead}</p>
        </div>
        </div>
    </header>
);

export default titleBarGeneric;