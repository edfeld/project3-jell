import React from 'react';
import ToggleButton from './ToggleButton.js';
import './DrawerToggle.css';
import './Drawer.css';

const SideDrawer = props => {
    let drawerClass = 'side-drawer';
    if(props.show) {
        drawerClass = 'side-drawer open';
    }
   return ( <nav className={drawerClass}>
            <h2>Elevate Debate</h2>
        <ToggleButton click={props.toggleHandle}/>
        <ul>
            <input className="form-control search" type="text" placeholder="Default input"/>
            <li><a href="/">Home</a></li>
            <li><a href="/">Top Debates</a></li>
            <li><a href="/">Relevant Debates</a></li>
            <li><a href="/">Create A Post</a></li>
        </ul>
    </nav>
   )
};

export default SideDrawer;