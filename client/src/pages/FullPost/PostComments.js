import React from 'react';
import Badge from '../../components/Badges'

const PostComments = props =>{
   const key = props.data.id;
   const badges = props.data.user.badges.split(':');
   console.log("badges", badges);
    if(props.data.isRebuttal === true){

        return (
            <div key={key}>
                    <header className="card" style={{display: 'inline-flex', width: '75%', margin: '1rem',  backgroundImage: 'linear-gradient(to bottom right,rgba(221, 18, 18, 0.855), rgba(17, 10, 51, 0.89))'}}>
                    <div className="card-body">
                    <h6>Is This A Rebuttal?</h6>
                        <h6>Yes</h6>
                        <h6>Username:</h6>
                        <h6 className="card-title">{props.data.user.username}</h6>
                        <h6>Response:</h6>
                        <h6 className="card-text">{props.data.content}</h6>
                        {badges.map(badge => (
                            <Badge badge={badge}></Badge>
                        ))}
                        <p><button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>Up Votes: {props.data.upVotes}/<button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>Down Votes: {props.data.downVotes}</p>
                    </div>
                </header>
            </div>
            );
    }else{

        return (
        <div key={key}>
                <header className="card" style={{display: 'inline-flex', width: '75%', margin: '1rem', backgroundImage: 'linear-gradient(to bottom right,rgba(221, 109, 18, 0.856), rgba(0, 0, 0, 0.753))'}}>
                <div className="card-body">
                    <h6>Is This A Rebuttal?</h6>
                    <h6>No</h6>
                    <h6>Username:</h6>
                    <h2 className="card-title">{props.data.user.username}</h2>
                    {badges.map(badge => (
                        <Badge badge={badge}></Badge>
                    ))}
                    <h6>Response:</h6>
                    <h6 className="card-text">{props.data.content}</h6>
                    <p><button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>Up Votes: {props.data.upVotes}/<button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>Down Votes: {props.data.downVotes}</p>
                </div>
            </header>
        </div>
        );
    }
};

export default PostComments;