import React from 'react';
import "./QuizCard.css";

const QuizCard = props => (
<<<<<<< HEAD
    <div className="card outerDiv">
        <div className="card-header headerDiv">
=======
    <div className="card quizcard">
        <div className="card-header quizcard-header">
>>>>>>> d75d843844d21e5f4b64fae6ad93e4728e60e8de
        {props.question}
        </div>
        <div className="card-body">
        <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        </div>
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