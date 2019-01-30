import React from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'




const FullPost = props => {
   console.log('this is props at FullPost ', props.post)
   if(props.post.post === null){
      return (<div/>)
   }else{
   return(
   <div>
   <PostHeader 
      post={props.post} 
      upvote={props.upvote}
      downvote={props.downvote}
   />
   {props.post.comments.map(comments => (
                    <PostComments 
                        data={comments}
                        upvote={props.upvote}
                        downvote={props.downvote}
                    />
              ))}
  
   </div>
   )
   }
};

export default FullPost;