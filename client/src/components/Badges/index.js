import React from 'react';
import "./style.css";
import icons from './badges.json';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

// uncomment to link to user page.
//import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Badge = props => {
    const data = props.badge;
    const badge = icons[data];
    return (
        <FontAwesomeIcon icon={badge}/>
    );

};

export default Badge;