import React from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'
import Chat from '../../components/Chat/Chat'



const FullPost = props => {
   console.log(props);
   if(props.post.post === null){
      return (<div/>)
   }else{
   return(
   <div>
   <Chat />
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
                        postId = {props.post.post.id}
                    />
              ))}
  
   </div>
   )
   }
};

export default FullPost;