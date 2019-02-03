// App.js
import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import LoginForm from './components/Login/LoginForm'
// import SignupForm from './components/SignupForm'
import Home from './pages/Home'
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/Backdrop/backdrop'
import MasterModal from './components/AllModals/MasterModal'
import PosterQuiz from './pages/PosterQuiz';
import ArrPosterQuiz from './posterquiz.json'
import TitleBar from './components/titleBar'
import FullPost from './pages/FullPost/FullPost'
// import socketIOClient from 'socket.io-client'
// import Chat from './components/Chat/Chat'
// import FullPost from './pages/FullPost'


class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null,
			sideOpen: false,
			ArrPosterQuiz,
			currentModal: "",
			searchBar: "",
			posts: [],
			debateTitle: "",
			debateContext: "",
			debateTags: "",
			commentContent: "",
			singlePost: {}
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log("axios.get. response.data: ", response.data)
			if (!!response.data.user) {
				console.log("response.data.user.username ::>",response.data.user.username);
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					// user: response.user
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
				console.log("componentDidMount. user: ", this.state.user);
			}
		})

		this.setState({ArrPosterQuiz: ArrPosterQuiz}); //[ERE] 20190123 - PosterQuiz implementation
		
		if(this.state.posts !== undefined){
		axios
			.get('/api/search/all')
			.then(response => {
			this.setState({
				posts: response.data
		   })
		})

	}
}

	_logout = (event) => {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login (username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

	searchDb = (e) => {
		e.preventDefault();
		const search = {
		 searchBar: this.state.searchBar
		}
		axios
			.post('/api/search', {
				sent: search.searchBar
			})
			.then(response => {
				console.log('this is the response: ', response.data);
			this.setState({
				searchBar: "",
				posts: response.data
		   })
		})
	}

	drawerToggle = () => {
		this.setState((prevState) => {
			return {sideOpen: !prevState.sideOpen}
		});
	};


	backDropClick = () => {
		this.setState({sideOpen: false});
	};

	changeModal = (type) => {
		if(type === ''){
			document.getElementsByClassName('opacityTransition')[0].style.opacity = '0';
			let that = this;
			function x (){
				that.setState({currentModal: type});
			}
			setTimeout(function(){
				x()
			}, 300)
		
		}else{
		 	this.setState({currentModal: type});
		}
	}

	postRoute = (e) => {
		e.preventDefault();
		const post = {
		 debateTitle: this.state.debateTitle,
		 debateContext: this.state.debateContext,
		 debateTags: this.state.debateTags
		}
		axios
			.post('/api/postRoute', {
				title: post.debateTitle,
				context: post.debateContext,
				tags: post.debateTags,
				userId: this.state.user.id
				
			})
			.then(response => {
				console.log('this is the  post response: ', response.data);
			this.setState({
				debateTitle: "",
				debateContext: "",
				debateTags: "",
				currentModal: "",
				posts: response.data
		   })
		})

	}

	commentRoute = (postId) => {
		// e.preventDefault();
		const comment = {
		 commentContent: this.state.commentContent,
		}
		axios
			.post('/api/commentRoute', {
				content: comment.commentContent,
				userId: this.state.user.id,
				isChild: 0,
				postId: postId
			})
			.then(response => {
				console.log('this is the response of the comment route: ', response.data);
			this.setState({
				commnetContent: "",
				currentModal: ""
		   })
		   this.fullpost(postId);
		})

	}

	upvote = (key) => {
		for(var i = 0; i < this.state.posts.length; i++) {
			if(this.state.posts[i].id === key){
				const plusOne = this.state.posts[i].upVotes + 1;
			axios
				.put('/api/upvote', {
					post: this.state.posts[i].id,
					upvotes: plusOne
				})
				.then(response => {
					axios
					.get('/api/search/all')
					.then(response => {
						this.fullpost(key);
						
					})
				})
			}
		}
		
	}

	downvote = (key) => {
		for(var i = 0; i < this.state.posts.length; i++) {
			if(this.state.posts[i].id === key){
				console.log(this.state.posts[i].downVotes);
				const minusOne = this.state.posts[i].downVotes + 1;
				console.log(this.state.posts[i].downVotes);
			axios
				.put('/api/downvote', {
					post: this.state.posts[i].id,
					downvotes: minusOne
				})
				.then(response => {
					axios
					.get('/api/search/all')
					.then(response => {
						this.fullpost(key)
					})
				})
			}
		}
		
	}

	componentWillMount(){
		this.fullpost();
		
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
			console.log('state after call ',this.state.singlePost)
		})
	}

	// update the radio buttons on the quiz when clicked
	answerClicked = (key, answerSelect) => {
		// console.log("<  answer selected================================");
		// console.log("answer selected: ", `${key} ${answerSelect}`);
		// console.log("ArrPosterQuiz: ", this.state.ArrPosterQuiz);
		this.state.ArrPosterQuiz.forEach(answer => {
			// console.log("Here is the answer and key: ", `${answer.id} ${key}`);
			// console.log('typeof answer.id and Key: ', `${typeof(answer.id)} ${typeof(key)}`)
			if (answer.id === parseInt(key)) {
				// console.log("In Foreach question: ", )
				answer.arrChoices.forEach( choice => {
					if (choice.text === answerSelect){
						choice.isChecked = true
						console.log("this choice is true", choice);
					} else {
						choice.isChecked = false;
						console.log("this choice is false: ", choice);
					}
				})
			}
		});
		this.setState({ ArrPosterQuiz: this.state.ArrPosterQuiz });
	}

	updateUserToPoster = (id) => {
		console.log("setting UserType to Poster here");	
		axios
			.put("/api/update/user/" + this.state.user.id, 
				{
					userType: "poster"
				}
			)
			.then(response => {
				console.log('this is the response for User Update to poster: ', response.data);
				this.setState({
					user: this.state.user
				})
			})
			.catch(err => {
				console.log("UpdateUserToPost error: ", err);
			})
		// db.users.update({UserType: "poster"}, {where: {username: this.user.username}})
        // .then(function (result) {
        //     console.log("Updated:", result);
        // }).catch(function(error) {
        //     console.log("Error: ", error);
        // });
	}
	
	// Handle the submit button event on the quiz page
	submitQuiz = () => {
		const arrQuiz = this.state.ArrPosterQuiz;
		const questCount = arrQuiz.length;
		let quizGrade = 0;
		let correctAnswers = 0;
		let totalAnswers = 0;
		
		arrQuiz.forEach(question => {
			let correctChoiceLetter = question.correctAnswer[0];
			console.log("The correct letter to guess: ", correctChoiceLetter);
			question.arrChoices.forEach( choiceSet => {
				console.log("letter: ", choiceSet.text[0])
				if (choiceSet.text[0] === correctChoiceLetter && choiceSet.isChecked === true) correctAnswers++;
				if (choiceSet.isChecked === true) totalAnswers++;  // count the number of answers chosen to see if all questions have been answered
			})
		});
		console.log("total questions answered: ", totalAnswers);
		if (totalAnswers === arrQuiz.length) {
			quizGrade = Math.round(correctAnswers / questCount * 100);
			console.log('Your quiz Grade:: ', quizGrade + '%');
		} else {
			alert('Not all questions have been answered');
		}
		console.log(this.state.user);
		if (quizGrade >= 60  && this.state.user.userType === 'basic') {
			console.log('call to updateUserToPost User:', this.state.user.id);
			this.updateUserToPoster(this.state.user.id);
			alert("you passed the quiz with " + quizGrade + '%');
		} else if (quizGrade < 60) {
			alert("you failed the quiz with " + quizGrade + '%');
		}

	}

	render() {
		let backdrop;
		if(this.state.sideOpen) {
			backdrop = <BackDrop click={this.backDropClick}/>;
		}
		return (
			<div className="App" style={{height: '100%'}}>
			{backdrop}
				{/* <Header 
					user={this.state.user} 
				/> */}
				{/* LINKS to our different 'pages' */}
				{/*  ROUTES */}
				{/* Adding Chat box */}
					{/* <div>
						<Chat/>
					</div> */}
				<MasterModal 
					currentModal={this.state.currentModal}
					changeModal={this.changeModal}
					value={this.state.debateTitle && this.state.debateContext && this.state.debateTags && this.state.commentContent}
					handleChange={this.handleChange}
					post={this.postRoute}
					comment={this.commentRoute}
					postData={this.state.singlePost}
				/>
				<Route 
					exact 
					path="/" 
					render={() => 
						<div>
							<SideDrawer 
								show={this.state.sideOpen} 
								toggleHandle={this.drawerToggle} 
								value={this.state.searchBar} 
								search={this.searchDb} 
								handleChange={this.handleChange} 
								changeModal={this.changeModal}
							/>
							<Home 
								user={this.state.user}  
								_logout={this._logout} 
								loggedIn={this.state.loggedIn} 
								posts={this.state.posts}
								upvote={this.upvote}
								downvote={this.downvote}
								fullpost={this.fullpost}
							/>
						</div>
					}
				/>
				<Route
					exact
					path="/login"
					render={() =>
						<div className='container'>
						<MasterModal 
								currentModal={this.state.currentModal}
								changeModal={this.changeModal}
						/>
						<TitleBar />
						<SideDrawer 
								show={this.state.sideOpen} 
								toggleHandle={this.drawerToggle} 
								value={this.state.searchBar} 
								search={this.searchDb} 
								handleChange={this.handleChange} 
								changeModal={this.changeModal}
						/>
						<LoginForm
							show={this.state.sideOpen} 
							toggleHandle={this.drawerToggle}
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>
						</div>
					}
				/>
				<Route 
					exact 
					path="/posterquiz" 
					render={() => 
						<div>
						{/* <h3>Debate Poster Quiz</h3> */}
						<SideDrawer 
							show={this.state.sideOpen} 
							toggleHandle={this.drawerToggle} 
							search={this.searchDb}
						/>
						<PosterQuiz 
							answerClicked={this.answerClicked}
							ArrPosterQuiz={this.state.ArrPosterQuiz} 
							user={this.state.user}  
							_logout={this._logout} 
							loggedIn={this.state.loggedIn} 
							submitQuiz={this.submitQuiz}
						/>
						</div>
					} 
				/>
				<Route 
					exact 
					path="/api/post/:id"
					render={() =>
						<div>
						<SideDrawer 
								show={this.state.sideOpen} 
								toggleHandle={this.drawerToggle} 
								value={this.state.searchBar} 
								search={this.searchDb} 
								handleChange={this.handleChange} 
								changeModal={this.changeModal}
							/>
						<FullPost 
							post={this.state.singlePost}
							upvote={this.upvote}
							downvote={this.downvote} 
							changeModal={this.changeModal}
							user={this.state.user}
						/>
						</div>
					}  
					/>
				{/* <LoginForm _login={this._login} /> */}
			</div>
		)
	}
}

// Making the SOCKET App component
// class chat extends Component{
// 	constructor() {
// 		super()
// 	}
// }

// render() {
// 	return (
// 		<div>
// 			<p>Testing 100002</p>
// 		</div>
// 	)
// }


// server = app.listen(8080, function(){
//     console.log('server is running on port 8080')
// });

// io = socket(server);

// io.on('connection', (socket) => {
//     console.log(socket.id);

//     socket.on('SEND_MESSAGE', function(data){
//         io.emit('RECEIVE_MESSAGE', data);
//     })
// });

export default App;
