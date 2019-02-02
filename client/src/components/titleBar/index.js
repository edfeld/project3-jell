import React from 'react';
import "./titleBar.css";

const titleBar = props => (
    <header className="titleBar">
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">All Open Debates</h1>
            <p className="lead">What People Are Talking About Right Now?</p>
        </div>
        </div>
    </header>
);

export default titleBar;