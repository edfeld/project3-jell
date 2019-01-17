import React from 'react';
import './backdrop.css';


const BackDrop = props => (
    <div className="backdrop" onClick={props.click}></div>
);

export default BackDrop;