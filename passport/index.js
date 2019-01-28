const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const GoogleStratgey = require('./googleStrategy')
const User = require('../models').users;

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log("user.datavalues::::::>>>>>>", user.dataValues);
	console.log('---------')
	// console.log("_id may not be going to work -- passport/index.js");
	done(null, { _id: user.dataValues.id });
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called')
	console.log("DEserialize. id::::+++===>", id);
	User.findOne({where:{ id: id._id }})
			.then(user =>{
				console.log('======= DESERILAIZE USER CALLED ======')
				console.log(user)
				console.log('--------------')
				done(null, user)		
			})
			.catch( err => {
				console.log("index.js Passort Error: ", err);
			})
		
		// ,
		// 'firstName lastName photos local.username',
		// (err, user) => {
		// 	console.log('======= DESERILAIZE USER CALLED ======')
		// 	console.log(user)
		// 	console.log('--------------')
		// 	done(null, user)
		// }
	// )
})

// ==== Register Strategies ====
passport.use(LocalStrategy)
passport.use(GoogleStratgey)

module.exports = passport
