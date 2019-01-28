import React from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'



const FullPost = props => (
   <div>
   <PostHeader post={props.post.post}/>
   <PostComments post={props.post.comments}/>
   </div>
);

export default FullPost;