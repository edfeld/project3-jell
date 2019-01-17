import React from 'react';
import "./titleBar.css";

const titleBar = props => (
    <header className="titleBar">
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
        </div>
    </header>
);

export default titleBar;