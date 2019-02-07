import React from 'react';
import ToggleButton from './ToggleButton.js';
import './DrawerToggle.css';
import './Drawer.css';
import { Link } from 'react-router-dom' //[ERE 20190121] Add Link

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
                placeholder="Search For Key Words" 
                name="searchBar" 
                value={props.value} 
                onChange={props.handleChange}
            />
                <button 
                    type="button" 
                    className="btn btn-secondary searchBtn" 
                > 
                <Link 
                    to={'/api/search/' + props.value} 
                    onClick={() => props.search()}>Search</Link>
                </button>
            <li><Link to="/" onClick={() =>props.toggleHandle()}>Home</Link></li>
            <li><Link to="/topdebates" onClick={() =>props.toggleHandle()}>Top Debates</Link></li>
            <li><a onClick={() =>{props.changeModal('MakePost'); props.toggleHandle()}}>Create A Post</a></li>
            {/* <li><a onClick={() =>{props.changeModal('Challenge'); props.toggleHandle()}}>Challenge</a></li> */}
            <li><a onClick={() =>{props.changeModal('SignUp'); props.toggleHandle()}}>Sign up</a></li>
            <li><Link to="/login" onClick={props.toggleHandle}>Login </Link></li>
            {/* <li><Link to="/signup" className="nav-link">Signup</Link></li> */}
            {/* <li><a onClick={() =>{props._logout()}}>logout</a></li> */}
            <Link to="#" onClick={() => {props._logout(); props.toggleHandle()}}>
			        Logout
			      </Link>
            <li><Link to="/posterquiz" onClick={props.toggleHandle}>Poster Quiz</Link></li>
        </ul>
    </nav>
   )
};

export default SideDrawer;