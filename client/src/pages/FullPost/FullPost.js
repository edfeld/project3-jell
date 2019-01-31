import React from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'




const FullPost = props => {
   if(props.post.post === null){
      return (<div/>)
   }else{
   return(
   <div>
   <PostHeader 
      post={props.post} 
      upvote={props.upvote}
      downvote={props.downvote}
      changeModal={props.changeModal}
   />
   {props.post.comments.map(comments => (
                    <PostComments 
                        data={comments}
                        upvote={props.upvote}
                        downvote={props.downvote}
                        changeModal={props.changeModal}
                    />
              ))}
  
   </div>
   )
   }
};

export default FullPost;