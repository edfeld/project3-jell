import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './LoginForm.css'
import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="login-form">
					<h3 className='login-head'>User Login</h3>
					<form>
						<label className='login-frm-elem' htmlFor="username">Username: </label>
						<input className='login-frm-elem'
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<label className='login-frm-elem' htmlFor="password">Password: </label>
						<input className='login-frm-elem'
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button onClick={this.handleSubmit}>Login</button>
					</form>
					<div className='Google-Login-Btn'>
						<a  href="/auth/google">
						{/* <GoogleButton /> */}
						<img src={googleButton} alt="sign into Google Button" />
						</a>
					</div>
				</div>
			)
		}
	}
}

export default LoginForm
