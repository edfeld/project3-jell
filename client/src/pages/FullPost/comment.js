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
    if (!props || !props.indent) {
        return 0;
    } else {
        return props.indent;
    }
}

class PostComments extends React.Component {

    Constructor() {
        this.setState = {
            children: []
        }
    }

    getChildren (children) {
        let obj = this;
        axios.get('/api/comments/children/'+ children)
        .then(function (result) {
            let comps = []
            console.log("Children",result);
            let indent = getIndent(obj.state);
            result.data.map(comment => {
                comps.push(<PostComments data={comment} indent={indent++}></PostComments>);
            });
            obj.setState({children: comps});
        })
    }

    render () {
        const bkg = findBkgType(this.props.data.isRebuttal);
        const indent = getIndent(this.props);
        const type= getType(this.props.data.isRebuttal);
        const badges= this.props.data.user.badges.split(':');
        const style = {
            display: 'inline-flex', 
            width: '75%',
            margin: '1rem',
            marginLeft: indent +'rem',  
            backgroundImage: bkg
        };

       if (this.state) {
        return( 
            <div key={this.props.data.key}>
               <header className="card" style={style}>
                   <div className="card-body">
                       <h6 className="type">{type}</h6>
                       <Link to={'/user/' + this.props.data.userId}><h4 className="card-title">{this.props.data.username}</h4></Link>
                       {badges.map(badge => ( 
                           <Badge badge={badge}></Badge>
                       ))}
                       <hr></hr>
                       <h5 className="card-text">{this.props.data.content}</h5>
                       <p>
                           <button onClick={() => this.props.upvote(this.props.key)} style={{background: 'none',border: 'none'}}>+</button>
                           Up Votes: {this.props.data.upvotes}/
                           <button onClick={() => this.props.downvote(this.props.key)} style={{background: 'none', border: 'none'}}>-</button>
                           Down Votes: {this.props.data.downvotes}
                       </p>
                       <button onClick={() => this.getChildren(this.props.data.children)}>View Children</button>
                       <button>Reply</button>
                   </div>
                   <div>
                       {this.state.children}
                   </div>
               </header>
             </div>
          );
       } else {
        return( 
            <div key={this.props.data.key}>
               <header className="card" style={style}>
                   <div className="card-body">
                       <h6 className="type">{type}</h6>
                       <Link to={'/user/' + this.props.data.userId}><h4 className="card-title">{this.props.data.username}</h4></Link>
                       {badges.map(badge => (
                           <Badge badge={badge}></Badge>
                       ))}
                       <hr></hr>
                       <h5 className="card-text">{this.props.data.content}</h5>
                       <p>
                           <button onClick={() => this.props.upvote(this.props.key)} style={{background: 'none',border: 'none'}}>+</button>
                           Up Votes: {this.props.data.upvotes}/
                           <button onClick={() => this.props.downvote(this.props.key)} style={{background: 'none', border: 'none'}}>-</button>
                           Down Votes: {this.props.data.downvotes}
                       </p>
                       <button onClick={() => this.getChildren(this.props.data.children)}>View Children</button>
                       <button>Reply</button>
                   </div>
               </header>
             </div>
          );
       }
       
    }

};

export default PostComments;