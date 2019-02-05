import React, {Component} from 'react'
import axios from 'axios';
import SearchPostCard from './SearchPostCard'
// import TopDebatesHead from './TopDebatesHead'

class SearchResults extends Component {
	constructor(props) {
		super(props)
		this.state = {
            searchResults: []
		}
	}

	getSearchResults = () =>{
		axios.get("/api/search/" + window.location.href.split('search/')[1])
			.then(response => {
                console.log(response.data, 'this is the response on the the searchPage page');
                this.setState({
                    searchResults: response.data
                })
			}
			)
			
		}
	
		componentDidMount(){
			this.getSearchResults()
		}

	render() {
		
		return (
            <div>
			<div style={{justifyContent: 'space-around', position: 'relative', left: '1%'}}>
                 {this.state.searchResults.map(posts => (
                        <SearchPostCard 
							  data={posts}
                              // upvote={props.upvote}
                              // downvote={props.downvote}
                              // changeModal={props.changeModal}
                              
                        />
				  ))}
			</div>
            </div>
        )
			
		
	}
}

export default SearchResults