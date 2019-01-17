import React from 'react';

import './Drawer.css';



const SideDrawer = props => {
    let drawerClass = 'side-drawer';
    if(props.show) {
        drawerClass = 'side-drawer open';
    }
   return ( <nav className={drawerClass}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">sign Up</a></li>
        </ul>
    </nav>
   )
};

export default SideDrawer;