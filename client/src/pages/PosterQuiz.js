import React from 'react'
import Card from '../components/Card/Card'
import TitleBarGeneric from '../components/TitleBarGeneric'
import './PosterQuiz.css'
import QuizCard from '../components/QuizCard/QuizCard'

// TODO - add proptypes
const PosterQuiz = props => {
	// if (props.user) {
		return (
            <div style={{backgroundImage: "inherit"}}>
                  <TitleBarGeneric
                  title={"Debate Competency Quiz"}
                  lead={"Take this quiz to qualify to post debate topics and post concurrences and rebuttals"}
                  />
                  <div className="Home">
                        <p>Current User:</p>
                        <code>
                              {JSON.stringify(props.user)}
                        </code>
                  </div>
                  {props.ArrPosterQuiz.map(quiz => (
                        < QuizCard 
                              key={quiz.id}
                              answerClicked={props.answerClicked}
                              mkey={quiz.id}
                              question={quiz.questionText}
                              arrChoices={quiz.arrChoices}
                        />
                  ))}
                  <div className='submit-div'>
                        <button className='submit-quiz' onClick={() => {props.submitQuiz()}}>Submit Quiz</button>
                  </div>
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
