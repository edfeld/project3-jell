import React, {Component} from 'react'
import axios from 'axios'
import UserHeader from './UserHeader'
import UserPosts from './UserPosts'

class UserPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {},
			userId: props.userId,
			selectedUserID: props.selectedUserID
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
		let id = this.state.selectedUserID
		// let id = this.state.userId.match.params.id;
		this.getUser(id)
		console.log("UserPage UserID:=-=-=-=-=-=-=-> ", id)
	}

	render() {
		if(this.state.user.posts === undefined){
			return(<div/>)
		}else{
		console.log(this.state.user, 'this is the user info on the user page')
		return (
            <div>
				<UserHeader 
					userData={this.state.user}
				/>

				{this.state.user.posts.map(posts => (
						<UserPosts 
							data={posts}
							selectPostID={this.props.selectPostID}
						/>
				))}
            </div>
		)
				}
			
		
	}
}

export default UserPage