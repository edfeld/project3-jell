import React, {Component} from 'react'
import axios from 'axios'
import UserHeader from './UserHeader'

class UserPage extends Component {
	constructor() {
		super()
		this.state = {
			user: {}
		}
	
	}

	

	getUser = (id) => {
	axios
	.get('/api/user/' + id)
	.then(response => {
	   console.log('response from userCall ', response.data)
	   this.setState({
		  user: response.data
	   })
	})
}

	componentDidMount(){
		let id = parseInt(window.location.href.split('user/')[1]);
		this.getUser(id)
	}

	render() {
		console.log(this.state.user, 'this is the user info on the user page')
		return (
            <div>
				<UserHeader 
					userData={this.state.user}
				/>
            </div>
        )
			
		
	}
}

export default UserPage