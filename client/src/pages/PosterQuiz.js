import React from 'react'
import Card from '../components/Card/Card';
import TitleBar from '../components/titleBar'
import "../components/PosterQuiz.css"
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
                              {JSON.stringify(props)}
                        </code>
                  </div>
                  {/* <div class="card w-75">
                        <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a href="#" class="btn btn-primary">Button</a>
                        </div>
                  </div> */}
                  {props.ArrPosterQuiz.map(quiz => (
                        < QuizCard 
                              question={quiz.questionText}
                              // question={props.ArrPosterQuiz.questionText}
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
