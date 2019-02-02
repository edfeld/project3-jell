import React from 'react';
import './DrawerToggle.css'

const ToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle_line"/>
        <div className="toggle_line"/>
        <div className="toggle_line"/>
    </button>
);

export default ToggleButton;