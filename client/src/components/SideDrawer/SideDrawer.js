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
            <li><Link to="/" onClick={() =>props.toggleHandle()}>Home</Link></li>
            <li><Link to="/" onClick={() =>props.toggleHandle()}>Top Debates</Link></li>
            <li><Link to="/" onClick={() =>props.toggleHandle()}>Relevant Debates</Link></li>
           
            <li><a onClick={() =>{props.changeModal('MakePost'); props.toggleHandle()}}>Create A Post</a></li>
            <li><a onClick={() =>{props.changeModal('Challenge'); props.toggleHandle()}}>Challenge</a></li>
            <li><a onClick={() =>{props.changeModal('SignUp'); props.toggleHandle()}}>Sign up</a></li>
     
            {/* Ed adding a link for logout -- testing routes */}
            <li><a href="/login" className='nav-link'>Login</a></li>
            {/* <li><Link to="/login" className="nav-link">Login </Link></li> */}
            <li><Link to="/posterquiz" className="nav-link" >Poster Quiz</Link></li>
        </ul>
    </nav>
   )
};

export default SideDrawer;