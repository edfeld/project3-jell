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
        <ToggleButton click={props.toggleHandle}/>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Top Debates</a></li>
            <li><a href="/">Relevant Debates</a></li>
            <li><a href="/">Create A Post</a></li>
        </ul>
    </nav>
   )
};

export default SideDrawer;