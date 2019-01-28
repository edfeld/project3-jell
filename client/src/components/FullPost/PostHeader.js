import React from 'react';

const PostHeader = props => {
    console.log('logged inside of postHeader ', props.post.post)
    return(
   <div style={{position: 'relative', left: '2.5%'}}>
       <div style={{borderRadius: '0px', width:'95%', background: 'black'}} class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">{props.post.title}</h1>
                <p class="lead">{props.post.context}</p>
                <p>Up Votes: {props.post.upVotes}/Down Votes: {props.post.downVotes}</p>
            </div>
        </div>
   </div>
    )
};

export default PostHeader;