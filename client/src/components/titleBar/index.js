import React from 'react';
import "./titleBar.css";

const titleBar = props => (
    <header className="titleBar">
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Todays Top Debates</h1>
            <p className="lead">Look At What People are talking about.</p>
        </div>
        </div>
    </header>
);

export default titleBar;