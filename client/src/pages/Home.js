import React, {Component} from 'react'
import Card from '../components/Card/Card';
import TitleBar from '../components/titleBar'


// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
            <div style={{backgroundImage: "inherit"}}>
              <TitleBar />
              {props.posts.map(posts => (
                    <Card 
                    data={posts}
                    upvote={props.upvote}
                    downvote={props.downvote}
                    fullpost={props.fullpost}
                    />
              ))}

              <div className="Home">
                    <p>Current User:</p>
                    <code>
                          {JSON.stringify(props)}
                    </code>
              </div>
            </div>
		)
	} else {
		return (
            <div style={{backgroundImage: "inherit"}}>
              <TitleBar />

              {props.posts.map(posts => (
                    <Card 
                    data={posts}
                    upvote={props.upvote}
                    downvote={props.downvote}
                    fullpost={props.fullpost}
                    />
              ))}

              <div className="Home">
                    <p>Current User:</p>
                    <code>
                          {JSON.stringify(props)}
                    </code>
              </div>
            </div>
		)
	}
}

export default Home
