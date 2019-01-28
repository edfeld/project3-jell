const User = require('../models').users;
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		console.log("Hitting the localStategy with username: ", username);
		User.findOne({ where: { 'username': username }})
		.then(resUser => {
			// console.log("====>resUser: ", resUser);
			if (resUser) {
				userMatch = bcrypt.compareSync(password, resUser.dataValues.passwordHashSalt);
				console.log("userMatch: ****============>", userMatch);
			} else {
				console.log("*=*=*=> return: Incorrect username")
				return done(null, false, { message: 'Incorrect username' });
			}
			if (!userMatch) {
				console.log("#######*=*=*=> return: Incorrect password")
				return done(null, false, { message: 'Incorrect password' });
			}
			// UserMatch is true
			// console.log("done::::> ", done(null, userMatch))
			return done(null, resUser);

		})
		.catch(err => {
			console.log("Catching error: =======", err);
			return done(err)
		});
		
	}
)

module.exports = strategy
