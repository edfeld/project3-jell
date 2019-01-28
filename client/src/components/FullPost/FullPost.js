import React from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'



const FullPost = props => (
   <div>
   <PostHeader post={props.post}/>
   <PostComments post={props.post}/>
   </div>
);

export default FullPost;