import React from 'react';
import ToggleButton from './ToggleButton.js';
import './DrawerToggle.css';
import './Drawer.css';
import { Route, Link } from 'react-router-dom' //[ERE 20190121] Add Link

const SideDrawer = props => {
    let drawerClass = 'side-drawer';
    if(props.show) {
        drawerClass = 'side-drawer open';
    }
   return ( <nav className={drawerClass}>
            <h2 className="drawerHead">Elevate Debate</h2>
        <ToggleButton click={props.toggleHandle}/>
        <ul>
            <input className="form-control search" type="text" placeholder="Search For A Debate"/>
            <button type="button" class="btn btn-secondary searchBtn" onClick={props.search} style={{position: 'relative'}}>Search</button>
            <li><a href="/">Home</a></li>
            <li><a href="/">Top Debates</a></li>
            <li><a href="/">Relevant Debates</a></li>
            <li><Link to="/" className="nav-link">Create A Post</Link></li>
            {/* Ed adding a link for logout -- testing routes */}
            <li><Link to="/login" className="nav-link">Login </Link></li>
            <li><Link to="/signup" className="nav-link">Signup</Link></li>
            <li><Link to="/posterquiz" className="nav-link">Poster Quiz</Link></li>
        </ul>
    </nav>
   )
};

export default SideDrawer;