import React from 'react';
import "./style.css";
import icons from '../../../public/badges.json';

// uncomment to link to user page.
//import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Badges = props => {
    const badges = props.data.badges.split(":");

    return(
        <div className="badges">
            {badges.map(badge => {
                <i className={icons[{badge}]}></i>
            })}
            
        </div>
    )

}