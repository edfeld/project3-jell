import React, {Component} from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'
import axios from 'axios';

class FullPost extends Component {
   // console.log('These are the props', props);
   // if(props.post.post === null){
   //    render(){
   //    return (<div/>)
   //    }
   // }else if(props.post.post !== null){
      constructor(props) {
		super(props)
		this.state = {
         upvote: props.upvote,
         downvote: props.downvote,
         changeModal:props.changeModal,
         singlePost: {},
         
         
		}
		
	}

   fullpost = (id) => {
	
      console.log('fullpost id: ', id)
      if(!id){
         id = parseInt(window.location.href.split('post/')[1])
      }else{
         id = parseInt(id);
      }
      console.log(id)
      console.log(window.location.href)
      axios
         .get('/api/post/' + id)
         .then(response => {
            this.setState({
               singlePost: response.data
               
            })
            
         })
      }

componentDidMount(){
      this.fullpost()
      }

   
   render(){
   if(this.state.singlePost.comments === undefined){
      return (<div/>)
   }else{
   let commentArr = this.state.singlePost.comments;
   return(
   <div>
   <PostHeader 
      post={this.state.singlePost.post} 
      upvote={this.state.upvote}
      downvote={this.state.downvote}
      changeModal={this.state.changeModal}
   />
   {commentArr.map(comments => (
                    <PostComments 
                        data={comments}
                        // upvote={props.upvote}
                        // downvote={props.downvote}
                        // changeModal={props.changeModal}
                        
                    />
              ))}
  
   </div>
   )
            }
      }
   };

export default FullPost;