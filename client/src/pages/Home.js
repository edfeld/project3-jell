import React from 'react'
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
                  />
            ))}
            </div>
		)
	} else {
		return (
            <div style={{backgroundImage: "inherit"}}>
            <TitleBar />
            {props.posts.map(posts => (
                  <Card 
                  data={posts}
                  />
            ))}
            </div>
		)
	}
}

export default Home
