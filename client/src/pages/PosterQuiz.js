import React from 'react'
import Card from '../components/Card/Card';
import TitleBar from '../components/titleBar'


// TODO - add proptypes

const PosterQuiz = props => {
	// if (props.user) {
		return (
            <div style={{backgroundImage: "inherit"}}>
            <TitleBar />
            <div className="Home">
                  <p>Current User:</p>
                  <code>
                        {JSON.stringify(props)}
                  </code>
            </div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
		)
      // } 
      // else {
	// 	return (
      //       <div style={{backgroundImage: "inherit"}}>
      //       <TitleBar />
      //       <div className="Home">
      //             <p>Current User:</p>
      //             <code>
      //                   {JSON.stringify(props)}
      //             </code>
      //       </div>
      //       <Card />
      //       <Card />
      //       <Card />
      //       <Card />
      //       <Card />
      //       <Card />
      //       </div>
	// 	)
	// }
}

export default PosterQuiz;
