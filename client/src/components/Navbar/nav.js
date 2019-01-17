import React from 'react';
import ToggleButton from "../SideDrawer/ToggleButton"
import "./navbar.css";

const Navbar = props => (
    <header className="navbar">
        <nav className="navnavigation">
            <div>
                <ToggleButton click={props.toggleHandle}/>
            </div>
            
             <div className="navlogo">Elevate Debate</div>
             <div className="spacer"></div>
             <div className="navitems">
                 <ul>
                     {/* <li><a href="/">Home</a></li>
                     <li><a href="/">Relevant</a></li>
                     <li><a href="/">Make A Post</a></li> */}
                 </ul>
             </div>
        </nav>
    </header>
);

export default Navbar;