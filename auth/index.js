const express = require('express');
const router = express.Router();
const User = require('../db').users;
const passport = require('../passport')
const bcrypt = require('bcryptjs');

const saltRounds = 10;

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { username, password } = req.body
	// console.log("username, password: ", `${username} ${password}` )
	// ADD VALIDATION
	User.findOne({ where: { 'username': username }})
	.then( response => {
		if (response) {
			console.log("response: ", response.dataValues);
			return {
				error: `Sorry, already a user with the username: ${username}`
			}
		} else {
			// TODO: create a new user. 
			// TODO: bcrypt password.
			bcrypt.hash(password, saltRounds, function(err, hash) {
				// Store hash in your password DB.
				// console.log("-=--=-=-=-=-=> Hashed password::: ", hash);
				const newUser = {
					'username': username,
					'passwordHashSalt': hash
				}
				// console.log("New User: ===>:", newUser);
				User.create(newUser).then(function(newItemUser) {
					res.json(newItemUser);
				});
			});
		}
	})
	.catch(function (err) {
	console.log("findOne Error: ", err);
  });

	// User.findOne({ where: { 'username': username }}, (err, userMatch) => {
	// 	if (userMatch) {
	// 		return res.json({
	// 			error: `Sorry, already a user with the username: ${username}`
	// 		})
	// 	}
	// 	const newUser = new User({
	// 		'username': username,
	// 		'passwordHashSalt': password
	// 	})
	// 	console.log("New User: ===>:", newUser);
	// 	newUser.save((err, savedUser) => {
	// 		if (err) return res.json(err)
	// 		return res.json(savedUser)
	// 	})
	// })
})

module.exports = router
