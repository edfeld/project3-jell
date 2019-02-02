import React from 'react';
import "./QuizCard.css";

const QuizCard = props => {
    const key = props.mkey.toString();
    return(
    <div className="card quizcard" key={key}>
        <div className="card-header quizcard-header">
        {props.question}
        </div>
        <div  className="card-body">
            <ul className="list-choices">
                {props.arrChoices.map(answer => (
                    <li className='quiz-choice' key={`${key}.${answer.text.charAt(0)}`} onClick={() => props.answerClicked(key, answer.text)}>
                        <input name={`choiceQ${key}}`} type="radio" 
                        onChange={() => {}}  
                        checked={answer.isChecked}
                        /><span>&nbsp;{answer.text}</span>
                    </li>
                    ))}
            </ul>
            {/* <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote> */}
        </div> {/* End quizCard*/}
    </div>
    )
};

export default QuizCard;