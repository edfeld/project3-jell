import {React, Component} from 'react'
import axios from 'axios'
import Card from '../components/Card/Card'

class FullPost extends Component {
	componentDidMount() {
		axios
			.get('/api/post')
			.then(response => {
				console.log('this is the response: ', response.data);
			this.setState({
				searchBar: "",
				post: response.data
		   })
		})

	}

	constructor() {
		super()
		this.state = {
			user: [],
			post: []
		}
	};
	//Make header for the page that will dipslay the main post title, context, tags such
	//Make a map function for that particular posts comments to display down the page prepending
	render(){
		return (
		<h1>this is the full post page</h1>
		);
	}
}

export default FullPost
