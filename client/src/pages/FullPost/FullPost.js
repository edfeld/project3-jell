import React, {Component} from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'
import axios from 'axios';
import Chat from '../../components/Chat/Chat'
import "./style.css";

class FullPost extends Component {
      constructor(props) {
		super(props)
		this.state = {
         changeModal:props.changeModal,
         singlePost: {},
         upVoteCount: 0,
         DownVoteCount: 0,
         chatRoom: false,
         chatRoomId:'',
         propsId: props.propsId
      }
		
      // console.log("these are the props in full post id ", id)
   }

renderChatroom = (key) => {
      //This method is not responsible for updating chat room to false
      // console.log("render chat roooooooooooooooooooom")
      this.setState({
         chatRoom: true,
         chatRoomId: key
      })
   }


   fullpost = (id) => {
      axios
         .get('/api/post/' + id)
         .then(response => {
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
         let id = parseInt(this.state.propsId.match.params.id)
         this.fullpost(id)
         
      }

      componentWillReceiveProps = () => {
         let id = parseInt(this.state.propsId.match.params.id)
         this.fullpost(id)
         
      }

   render(){
      // console.log('PROPPPPPS object',this.state.singlePost.id)
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
            renderChatroom={this.renderChatroom}
            
         />
         {commentArr.map(comments => (
                        <PostComments 
                              data={comments}
                              // upvote={props.upvote}
                              // downvote={props.downvote}
                              // changeModal={props.changeModal}
                              
                        />
                  ))}
         {/* ES6 conditional rendering of Chat component */}
         {this.state.chatRoom?<Chat roomId={this.state.chatRoomId}/>:null}
         </div>
         )
   }
   }
};

export default FullPost;