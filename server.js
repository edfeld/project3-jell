// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const db = require("./models");  // [ERE] for MySQL
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')  // Morgan is HTTP request logger middleware for Node.js
const session = require('express-session')
const passport = require('./passport')
const app = express()
const PORT = process.env.PORT || 3001


// const express = require('express')
// const socketIO = require('socket.io')

// const app = express()


// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		// store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// ===== testing middleware =====
app.use(function(req, res, next) {
	console.log('===== passport user =======')
	console.log(req.session)
	console.log(req.user)
	console.log('===== END =======')
	next()
})

console.log("Google testing next --->");
// testing
app.get(
	'/auth/google/callback',
	(req, res, next) => {
		console.log(`req.user: ${req.user}`)
		console.log('======= /auth/google/callback was called! =====');
		next();
	},
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => {
		console.log("server.js.  Redirect to Home");
		res.redirect('/')
	}
)

console.log("process.env.NODE_ENV:+:+>  ", process.env.NODE_ENV);
// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('=============YOU ARE IN THE PRODUCTION ENV=====================');
	app.use('/static', express.static(path.join(__dirname, './client/build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, './client/build/'))
	})
}

/* Express app ROUTING */
app.use('/auth', require('./auth'))
require('./routes/getRoutes')(app)
require('./routes/postroutes')(app)

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

const syncOptions = { force: false };
// ==== Starting Server ======


const server = db.sequelize.sync(syncOptions).then(function() {
	app.listen(PORT, () => {
		console.log(`App listening on PORT: ${PORT}`)
	//   console.log(
	// 	"==> 🌎  App Listening on port 3000. Visit http://localhost:3000/ in your browser.",
	//   );
	})
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// This creates our socket using the instance of the server
// const io = socketIO(server)

// server.listen(port1, () => console.log(`Listening on port ${port1}`))

// This is what the socket.io syntax is like
// io.on('connection', socket => {
// 	console.log('New client connected')
	
// 	socket.on('SEND_MESSAGE', function(data){
// 		io.emit('RECEIVE_MESSAGE', data);
// 	})
	
// 	// disconnect is fired when a client leaves the server
// 	socket.on('disconnect', () => {
// 	  console.log('user disconnected')
// 	})
//   });