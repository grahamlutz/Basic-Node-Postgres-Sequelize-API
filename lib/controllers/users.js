import express from 'express';
const router = express.Router();
const db = require("../models");
const requireLogin = require('../middleware/requireLogin')

// Get all users
router.get('/', (req, res) => {
	db.users.findAll({}).then(function(user) {
	    // into the main index, updating the page
	    var obj = {
	      user: user,
	      error: false
	    };
	    return res.json(user);
	  });
})

// Get individual user
router.get('/:userid', (req, res) => {
	db.users.findById(req.params.userid).then(user => {
		let obj = {
			user,
			error: false,
			userpath: req.params.userid
		}
	  return res.json(obj);
	})
})

// Create new user
router.post('/', (req, res) => {
	console.log(req.body.username)
	db.users.create({
	    username: req.body.username,
	    email: req.body.email,
	    password: req.body.password
	  })
	  // pass the result of our call
	  .then(function(user) {
	    return res.json(user)
	  })
	  .catch((err) => err);
})

router.post('/login', (req, res) => {
	console.log('POST /users/login')
	let options =   {
		where: {
		  	email: req.body.email
		  }
	};
	db.users.findOne(options).then(user => {
		if (!user) {
			res.json({ error: 'Invalid email or password.' });
		} 
		if (req.body.password === user.password) {
			// sets a cookie with the user's info
			//req.session.user = user;
			res.json({'message': 'successful login!'});
		} else {
			res.json({ error: 'Invalid email or password.' });
		}
	});
});

// Update individual user
router.put('/:userid', (req, res) => {

	let options =   {
		where: {
		  	id: req.params.userid
		  }
	};

	db.users.update(req.body, options)
	  // pass the result of our call
	  .then(function(user) {
	  	console.log(user);
	  	console.log('tada');
	    return res.json(user)
	  });
})

// Delete Individual user
router.delete('/:userid', (req, res) => {
	db.users.destroy({
		where: {
		  	id: req.params.userid
		  }
		})
	  // pass the result of our call
	  .then(function(user) {
	    return res.json(user)
	  });
})

module.exports = router;