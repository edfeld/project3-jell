const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models').users;

const strategy = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: '/auth/google/callback'
	},
	function(token, tokenSecret, profile, done) {
		// testing
		console.log('===== GOOGLE PROFILE =======')
		console.log(profile)
		console.log('======== END ===========')
		// code
		const { id, name, photos } = profile
		User.findOne({where: { 'googleId': id }})
		.then(userMatch => {
			if (userMatch) {
				return done(null, userMatch)
			} else {
				const newUserId = `${name.givenName[0]}${name.familyName}`;
				// if no user in our db, create a new user with that googleId
				console.log('====== PRE SAVE Google =======')
				console.log(id)
				console.log(profile)
				console.log('====== post save Google ....')
				const newGoogleUser = new User({
					username: newUserId,
					passwordHashSalt: "GoogleUser",
					googleId: id,
					firstName: name.givenName,
					lastName: name.familyName,
					// photos: photos
				})
				// save this user
				newGoogleUser.save()
					.then(savedUser =>{
						console.log("savedUser:=:=:=:=:=:=", savedUser);
						return done(null, savedUser);
					})
					.catch(err => {
						return done(null, false);
					})
				// newGoogleUser.save((err, savedUser) => {
				// 	if (err) {
				// 		console.log('Error!! saving the new google user')
				// 		console.log(err)
				// 		return done(null, false)
				// 	} else {
				// 		return done(null, savedUser)
				// 	}
				// }) // closes newGoogleUser.save
				}
			}) // close .then()
			.catch(err => {
				console.log('** Egregious Error!! trying to find user with googleId')
				console.log(err)
				return done(null, false)
			})
		
		

		// old version of findOne
		// User.findOne({ 'google.googleId': id }, (err, userMatch) => {
		// 	// handle errors here:
		// 	if (err) {
		// 		console.log('Error!! trying to find user with googleId')
		// 		console.log(err)
		// 		return done(null, false)
		// 	}
		// 	// if there is already someone with that googleId
		// 	if (userMatch) {
		// 		return done(null, userMatch)
		// 	} else {
		// 		// if no user in our db, create a new user with that googleId
		// 		console.log('====== PRE SAVE =======')
		// 		console.log(id)
		// 		console.log(profile)
		// 		console.log('====== post save ....')
		// 		const newGoogleUser = new User({
		// 			'google.googleId': id,
		// 			firstName: name.givenName,
		// 			lastName: name.familyName,
		// 			photos: photos
		// 		})
		// 		// save this user
		// 		newGoogleUser.save((err, savedUser) => {
		// 			if (err) {
		// 				console.log('Error!! saving the new google user')
		// 				console.log(err)
		// 				return done(null, false)
		// 			} else {
		// 				return done(null, savedUser)
		// 			}
		// 		}) // closes newGoogleUser.save
		// 	}
		// }) // closes User.findONe
	}
)

module.exports = strategy
