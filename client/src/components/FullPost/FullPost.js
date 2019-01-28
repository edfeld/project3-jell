import React from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'



const FullPost = props => {
   console.log('this is props at FullPost ', props.post)
   if(props === {}){
      return (<div/>)
   }else{
   return(
   <div>
   <PostHeader post={props.post}/>
   {/* {props.post.comments.map(comments => (
                    <PostComments 
                    data={comments}
                    upvote={props.upvote}
                    downvote={props.downvote}
                    />
              ))} */}
  
   </div>
   )
   }
};

export default FullPost;