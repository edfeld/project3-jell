import React from 'react';
import Badge from '../../components/Badges'
import { Link } from 'react-router-dom'

const PostComments = props =>{
   const key = props.data.id;
   const badges = props.data.user.badges.split(':');
   console.log("badges", badges);
   console.log('looking for user id', props.data)
    if(props.data.isRebuttal === true){

        return (
            <div key={key}>
                    <header className="card" style={{display: 'inline-flex', width: '75%', margin: '1rem',  backgroundImage: 'linear-gradient(to bottom right,rgba(221, 18, 18, 0.855), rgba(17, 10, 51, 0.89))'}}>
                    <div className="card-body">
                        <h6 className="type">Rebuttal</h6>
                        <Link to={'/api/user/' + props.data.userId}><h4 className="card-title">{props.data.user.username}</h4></Link>
                        {badges.map(badge => (
                            <Badge badge={badge}></Badge>
                        ))}
                        <hr></hr>
                        <h5 className="card-text">{props.data.content}</h5>
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
                    <h6 className="type">Concurrence</h6>
                    <Link to={'/api/user/' + props.data.userId}><h4 className="card-title">{props.data.user.username}</h4></Link>
                    {badges.map(badge => (
                        <Badge badge={badge}></Badge>
                    ))}
                    <hr></hr>
                    <h5 className="card-text">{props.data.content}</h5>
                    <p><button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>Up Votes: {props.data.upVotes}/<button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>Down Votes: {props.data.downVotes}</p>
                </div>
            </header>
        </div>
        );
    }
};

export default PostComments;