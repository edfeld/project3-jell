import React from 'react';
import Badge from '../../components/Badges';
import Reply from '../../components/Reply-Btn';
import axios from 'axios';
import { Link } from 'react-router-dom';


class PostComments extends React.Component {

    Constructor(props) {
        super(props);

        this.state = {
            key : props.data.id,
            badges : props.data.user.badges.split(':'),
            childrenArr : props.data.children,
            isRebuttal: props.data.isRebuttal,
            children: [],
            bkg: findType(),
            indent: getIndent(props),
            type: getType(props.data.isRebuttal)
        }
    }

    getType (type) {
        if (type) {
            return 'Rebuttal';
        } else {
            return 'Concurrence';
        }
    }

    findType() {
        if (this.state.isRebuttal) {
            return 'linear-gradient(to bottom right,rgba(221, 18, 18, 0.855), rgba(17, 10, 51, 0.89))';
        } else {
            return 'linear-gradient(to bottom right,rgba(221, 109, 18, 0.856), rgba(0, 0, 0, 0.753))';
        }
    }

    getIndent(props) {
        if (!props.indent) {
            return 0;
        } else {
            return props.indent;
        }
    }

    getChildren (children) {
        axios.get('/api/comments/children/'+ children)
        .then(function (result) {
            let comps = []
            result.map(comment => {
                comps.push(<PostComments data={comment} indent={this.state.indent++}></PostComments>);
            });
            this.setState({children: comps});
        })
    }
   

    render () {
        const style = {
            display: 'inline-flex', 
            width: '75%',
            margin: '1rem',
            marginLeft: this.state.indent +'rem',  
            backgroundImage: this.state.bkg
        };

       return( 
         <div key={this.state.key}>
            <header className="card" style={style}>
                <div className="card-body">
                    <h6 className="type">Rebuttal</h6>
                    <Link to={'/user/' + props.data.userId}><h4 className="card-title">{props.data.user.username}</h4></Link>
                    {badges.map(badge => (
                        <Badge badge={badge}></Badge>
                    ))}
                    <hr></hr>
                    <h5 className="card-text">{props.data.content}</h5>
                    <p>
                        <button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>
                        Up Votes: {props.data.upVotes}/
                        <button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>
                        Down Votes: {props.data.downVotes}
                    </p>
                    <button>View Children</button>
                    <button>Reply</button>
                </div>
                <div>
                    {this.state.children}
                </div>
            </header>
          </div>
       );
    }

};

export default PostComments;