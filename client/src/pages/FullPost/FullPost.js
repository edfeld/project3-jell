import React, {Component} from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'
import axios from 'axios';
import "./style.css";

class FullPost extends Component {
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
   
componentWillReceiveProps = () => {
   this.fullpost()
}

   fullpost = (id) => {
      console.log('fullpost id: ', id)
      if(!id){
         id = parseInt(window.location.href.split('fullpost/')[1])
      }else{
         id = parseInt(id);
      }
      axios
         .get('/api/post/' + id)
         .then(response => {
            console.log('response from fullpost ', response)
            this.setState({
               singlePost: response.data
            })
         })
      }

      upvote = (key) => {
            if(this.state.singlePost.post.id === key){
               const plusOne = this.state.singlePost.post.upVotes + 1;
            axios
               .put('/api/upvote', {
                  post: this.state.singlePost.post.id,
                  upvotes: plusOne
               })
               .then(response => {
                     this.fullpost(key);
                     console.log(response);
                  })
         }
      }
   
      downvote = (key) => {
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
                     this.fullpost(key)
                     console.log(response);
                  })
         }
         
      }

componentDidMount(){
      this.fullpost()
      }




   render(){
   if(this.state.singlePost.comments === undefined){
      return (<div/>)
   }
   else{
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