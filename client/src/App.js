import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import TitleBar from './components/titleBar'
import Card from './components/Card/Card'
import Home from './pages/Home'
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/Backdrop/backdrop'
import PosterQuiz from './pages/PosterQuiz'

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null,
			sideOpen: false
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log("axios.get. response.data: ", response.data)
			if (!!response.data.user) {
				console.log("response.data.user.username ::>",response.data.user.username);
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					// user: response.user
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
				console.log("componentDidMount. user: ", this.state.user);
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	searchDb = () => {
		console.log("this works");
		// axios
		// 	.get('/api/search', {
				
		// 	})
		// 	.then(response => {
		// 		console.log(response)
		// 		if (response.status === 200) {
		// 			// update the state
		// 			this.setState({
		// 				loggedIn: true,
		// 				user: response.data.user
		// 			})
		// 		}
		// 	})

	}

	drawerToggle = () => {
		this.setState((prevState) => {
			return {sideOpen: !prevState.sideOpen}
		});
	};

	backDropClick = () => {
		this.setState({sideOpen: false});
	};

	render() {
		let backdrop;
		if(this.state.sideOpen) {
			backdrop = <BackDrop click={this.backDropClick}/>;
		}
		return (
			<div className="App" style={{height: '100%'}}>
			{backdrop}
				{/* <Header user={this.state.user} /> */}
				{/* LINKS to our different 'pages' */}
				{/*  ROUTES */}
				<Route 
					exact 
					path="/" 
					render={() => 
						<div>
						<SideDrawer show={this.state.sideOpen} toggleHandle={this.drawerToggle} search={this.searchDb}/>
						<Home user={this.state.user}  _logout={this._logout} loggedIn={this.state.loggedIn} />
						</div>
					} 
				/>
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route 
					exact 
					path="/signup" 
					component={SignupForm} 
				/>
				<Route 
					exact 
					path="/posterquiz" 
					render={() => 
						<div>
						<h3>Debate Poster Quiz</h3>
						<SideDrawer show={this.state.sideOpen} toggleHandle={this.drawerToggle} search={this.searchDb}/>
						<PosterQuiz user={this.state.user}  _logout={this._logout} loggedIn={this.state.loggedIn} />
						</div>
					} 
				/>
				{/* <LoginForm _login={this._login} /> */}
			</div>
		)
	}
}

export default App
