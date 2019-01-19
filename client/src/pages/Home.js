import React from 'react'
import Card from '../components/Card/Card';
import TitleBar from '../components/titleBar'


// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
            <div style={{backgroundImage: "inherit"}}>
            <TitleBar />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
		)
	} else {
		return (
            <div style={{backgroundImage: "inherit"}}>
            <TitleBar />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
		)
	}
}

export default Home
