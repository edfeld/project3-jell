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
        <ToggleButton 
            click={props.toggleHandle}
            />
        <ul>
            <input 
                className="form-control search" 
                type="text" 
                placeholder="Search For A Debate" 
                name="searchBar" 
                value={props.value} 
                onChange={props.handleChange}
            />
            <button 
                type="button" 
                class="btn btn-secondary searchBtn" 
                onClick={props.search} 
                style={{position: 'relative'}}
            >Search</button>
            <li><a href="/">Home</a></li>
            <li><a href="/">Top Debates</a></li>
            <li><a href="/">Relevant Debates</a></li>
           
            <li><a onClick={() =>{props.changeModal('MakePost'); props.toggleHandle()}}>Create A Post</a></li>
            <li><a onClick={() =>{props.changeModal('Challenge'); props.toggleHandle()}}>Challenge</a></li>
            <li><a onClick={() =>{props.changeModal('SignUp'); props.toggleHandle()}}>Sign up</a></li>
     
            {/* Ed adding a link for logout -- testing routes */}
            {/* <li><a href="/login" className='nav-link'>Login</a></li> */}
            <li><Link to="/login" className="nav-link" onClick={props.toggleHandle}>Login </Link></li>
            <li><Link to="/signup" className="nav-link">Signup</Link></li>
            <li><Link to="/posterquiz" className="nav-link" onClick={props.toggleHandle}>Poster Quiz</Link></li>
        </ul>
    </nav>
   )
};

export default SideDrawer;