import React, {Component} from 'react'
import axios from 'axios';
import TopPostCard from './topPostCard'
import TopDebatesHead from './TopDebatesHead'

class TopDebates extends Component {
	constructor() {
		super()
		this.state = {
			topPosts: []
		}
	}

	getTopFour = () =>{
		axios.get('/api/top-posts/4/0')
			.then(response => {
				console.log(response.data, 'this is the response on the top debates page');
				this.setState({
					topPosts: response.data
				})
			}
			)
			
		}
	

		componentDidMount(){
			this.getTopFour()
		}

	render() {
		
		return (
            <div>
			<TopDebatesHead/>
                 {this.state.topPosts.map(posts => (
                        <TopPostCard 
                              data={posts}
                              // upvote={props.upvote}
                              // downvote={props.downvote}
                              // changeModal={props.changeModal}
                              
                        />
                  ))}
            </div>
        )
			
		
	}
}

export default TopDebates