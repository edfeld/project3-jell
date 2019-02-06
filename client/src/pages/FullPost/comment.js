import React from 'react';
import Badge from '../../components/Badges';
import Reply from '../../components/Reply-Btn';
import axios from 'axios';
import { Link } from 'react-router-dom';


function getType (type) {
    if (type) {
        return 'Rebuttal';
    } else {
        return 'Concurrence';
    }
}

function findBkgType(isRebuttal) {
    if (isRebuttal) {
        return 'linear-gradient(to bottom right,rgba(221, 18, 18, 0.855), rgba(17, 10, 51, 0.89))';
    } else {
        return 'linear-gradient(to bottom right,rgba(221, 109, 18, 0.856), rgba(0, 0, 0, 0.753))';
    }
}

function getIndent(props) {
    if (!props.indent) {
        return 0;
    } else {
        return props.indent;
    }
}

class PostComments extends React.Component {

    Constructor(props) {
        let bkg = findBkgType(props.data.isRebuttal);
        let indent = getIndent(props);
        let type= getType(props.data.isRebuttal);
        this.state = {
            key : props.data.id,
            badges : props.data.user.badges.split(':'),
            username: props.data.username,
            userID: props.data.userID,
            upvotes: props.data.upVotes,
            downvotes: props.data.downVotes,
            childrenArr : props.data.children,
            isRebuttal: props.data.isRebuttal,
            children: [],
            bkg: bkg,
            indent: indent,
            tpye: type
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

    componentWillReceiveProps(props) {
        let bkg = findBkgType(props.data.isRebuttal);
        let indent = getIndent(props);
        let type= getType(props.data.isRebuttal);
        this.setState = {
            key : props.data.id,
            badges : props.data.user.badges.split(':'),
            username: props.data.username,
            userID: props.data.userID,
            upvotes: props.data.upVotes,
            downvotes: props.data.downVotes,
            childrenArr : props.data.children,
            isRebuttal: props.data.isRebuttal,
            children: [],
            bkg: bkg,
            indent: indent,
            tpye: type
        }
    }
   

    render () {
        const bkg = this.state.bkg;
        const indent = this.state.indent;
        const style = {
            display: 'inline-flex', 
            width: '75%',
            margin: '1rem',
            marginLeft: indent +'rem',  
            backgroundImage: bkg
        };

       return( 
         <div key={this.state.key}>
            <header className="card" style={style}>
                <div className="card-body">
                    <h6 className="type">Rebuttal</h6>
                    <Link to={'/user/' + this.state.userId}><h4 className="card-title">{this.state.username}</h4></Link>
                    {this.state.badges.map(badge => (
                        <Badge badge={badge}></Badge>
                    ))}
                    <hr></hr>
                    <h5 className="card-text">{props.data.content}</h5>
                    <p>
                        <button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}>+</button>
                        Up Votes: {this.state.upvotes}/
                        <button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}>-</button>
                        Down Votes: {this.state.downvotes}
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