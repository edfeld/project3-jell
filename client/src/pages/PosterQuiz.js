import React from 'react'
// import Card from '../components/Card/Card'
import TitleBarGeneric from '../components/TitleBarGeneric'
import './PosterQuiz.css'
import QuizCard from '../components/QuizCard/QuizCard'
import { Link } from 'react-router-dom'

// TODO - add proptypes
const PosterQuiz = props => {
      console.log("Current User:", JSON.stringify(props.user))
	if (props.user) {
		return (
            <div style={{backgroundImage: "inherit"}}>
                  <TitleBarGeneric
                  title={"Debate Competency Quiz"}
                  lead={"Take this quiz to qualify to post debate topics and post concurrences and rebuttals."}
                  />
                  <div className="Home">
                        {/* <p>Current User:</p>
                        <code>
                              {JSON.stringify(props.user)}
                        </code> */}
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
      } 
      else {
            return (
                  <div style={{backgroundImage: "inherit"}}>
                        <TitleBarGeneric
                        title={"Debate Competency Quiz"}
                        lead={"Take this quiz to qualify to post debate topics and post concurrences and rebuttals.  Note: You must be logged in as a user to take the quiz."}
                        />
                        <div className='container clearfix'>
                              <div className='float-left'>
                                    <h2 className='quiz-note'>You are not currently logged in!</h2>
                              </div>
                              <div className='float-left'>
                                    <h2><Link className='quiz-loginlink' to="/login">&nbsp;Login </Link></h2>
                              </div>
                        </div>
                        <div className="Home">
                              {/* <p>Current User:</p>
                              <code>
                                    {JSON.stringify(props.user)}
                              </code> */}
                        </div>
                        
                  </div>
            )
	}
}

export default PosterQuiz;
