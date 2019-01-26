import React from 'react'
import Card from '../components/Card/Card';
import TitleBar from '../components/titleBar'
// import "./PosterQuiz.css"
import QuizCard from '../components/QuizCard/QuizCard';


// TODO - add proptypes

const PosterQuiz = props => {
	// if (props.user) {
		return (
            <div style={{backgroundImage: "inherit"}}>
                  <TitleBar />
                  <div className="Home">
                        <p>Current User:</p>
                        <code>
                              {JSON.stringify(props.user)}
                        </code>
                  </div>
                  {/* <div className="card w-75">
                        <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a href="#" className="btn btn-primary">Button</a>
                        </div>
                  </div> */}
                  {props.ArrPosterQuiz.map(quiz => (
                        < QuizCard 
                              question={quiz.questionText}
                              // question={props.ArrPosterQuiz.questionText}
                              arrChoices={quiz.arrChoices}
                        />

                  ))}
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
