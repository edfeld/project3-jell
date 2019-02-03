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
         upVoteCount: 0,
         DownVoteCount: 0
		}
		
   }
   

   fullpost = (id) => {
      console.log('fullpost id: ', id)
      if(!id){
         id = parseInt(window.location.href.split('post/')[1])
      }else{
         id = parseInt(id);
      }
      axios
         .get('/api/post/' + id)
         .then(response => {
            console.log('response from fullpost ', response)
            this.setState({
               singlePost: response.data
               // upVoteCount: this.state.singlePost.post.upVotes,
               // DownVoteCount: this.state.singlePost.post.downVotes
            })
         })
      }

      upvote = (key) => {
         // for(var i = 0; i < this.state.posts.length; i++) {
            if(this.state.singlePost.post.id === key){
               const plusOne = this.state.singlePost.post.upVotes + 1;
            axios
               .put('/api/upvote', {
                  post: this.state.singlePost.post.id,
                  upvotes: plusOne
               })
               .then(response => {
                  // axios
                  // .get('/api/getall')
                  // .then(response => {
                     this.fullpost(key);
                     console.log(response);
                     
                  })
            // }
         }
         
      }
   
      downvote = (key) => {
         // for(var i = 0; i < this.state.posts.length; i++) {
            if(this.state.singlePost.post.id === key){
               console.log(this.state.singlePost.post.downVotes);
               const minusOne = this.state.singlePost.post.downVotes + 1;
               console.log(this.state.singlePost.post.downVotes);
            axios
               .put('/api/downvote', {
                  post: this.state.singlePost.post.id,
                  downvotes: minusOne
               })
               .then(response => {
                  // axios
                  // .get('/api/getall')
                  // .then(response => {
                     this.fullpost(key)
                     console.log(response);
                  })
               
            // }
         }
         
      }


componentDidMount(){
      this.fullpost()
     
      }

   
   render(){
   if(this.state.singlePost.comments === undefined){
      return (<div/>)
   }else{
      
   // console.log(this.state.singlePost.post.upVotes)
   let commentArr = this.state.singlePost.comments;
   return(
   <div>
   <PostHeader 
      post={this.state.singlePost.post} 
      upvote={this.upvote}
      downvote={this.downvote}
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