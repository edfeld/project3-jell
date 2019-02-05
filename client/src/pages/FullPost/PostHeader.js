import React from 'react';
import { Link } from 'react-router-dom'

const PostHeader = props => {
    if(props.post === undefined){
        return(<div/>)
    }else{
    const key = props.post.id
    console.log('logged inside of postHeader ', props.post.title)
    return(
   <div style={{position: 'sticky', top: '.1px', zIndex: '500'}}>
       <div style={{borderRadius: '0px', width:'100%', backgroundImage: 'url(https://images.pexels.com/photos/1093909/pexels-photo-1093909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',height:'auto',justifyContent: 'center'}} class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">{props.post.title}</h1>
                <p class="lead">{props.post.context}</p>
                <Link to={'/api/user/' + props.post.userId}><h6>By:{props.post.user.username}</h6></Link>
                <p><button onClick={() => props.upvote(key)} style={{background: 'none',border: 'none'}}><h5>+</h5></button>Up Votes: {props.post.upVotes}/<button onClick={() => props.downvote(key)} style={{background: 'none', border: 'none'}}><h5>-</h5></button>Down Votes: {props.post.downVotes}</p>
                <button onClick={() => props.changeModal('Comment')}>comment</button>
            </div>
        </div>
   </div>
    )
    }
};

export default PostHeader;