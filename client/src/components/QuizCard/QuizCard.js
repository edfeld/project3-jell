import React from 'react';
import "./QuizCard.css";

const QuizCard = props => (
    <div className="card quizcard">
        <div className="card-header quizcard-header">
        {props.question}
        </div>
        <ul key={props.id} className="card-body">
            <ul className="list-choices">
                {props.arrChoices.map(answer => (
                    <li className='quiz-choice' key={answer.charAt(0)}>
                        <input type="checkbox"  checked='' id={answer.charAt(0)}/><span>&nbsp;{answer}</span>
                    </li>
                    ))}
            </ul>
            {/* <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote> */}
        </ul>
    </div>
);
// const Card = props => (
//     <header className="card">
// {/* <div class="flex-container"> */}
//     <div className="card-body">
//         <h2 className="card-title">Debate Title</h2>
//         <h5 className="card-subtitle mb-2">Debate Topic</h5>
//         <p className="card-text">Quick Debate Snippet</p>
//         <a href="#" className="card-link">View Full Debate</a>
//         <a href="#" className="card-link">Another link</a>
//     {/* </div> */}
// </div>
//     </header>
// );

export default QuizCard;