import React from 'react';

const PostHeader = props => {
    console.log('logged inside of postHeader ', props.post.post.title)
    return(
   <div style={{position: 'sticky', top: '.1px', zIndex: '500'}}>
       <div style={{borderRadius: '0px', width:'100%', background: '#d59181'}} class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">{props.post.post.title}</h1>
                <p class="lead">{props.post.post.context}</p>
                <p>Up Votes: {props.post.post.upVotes}/Down Votes: {props.post.post.downVotes}</p>
            </div>
        </div>
   </div>
    )
};

export default PostHeader;