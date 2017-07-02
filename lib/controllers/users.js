import express from 'express';
const router = express.Router();
const db = require("../models");

router.get('/', (req, res) => {
	db.users.findAll({}).then(function(user) {
	    // into the main index, updating the page
	    var obj = {
	      user: user,
	      error: false
	    };
	    return res.json(obj);
	  });
})

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

router.post('/', (req, res) => {
	db.users.create({
	    userbane: req.body.username,
	    email: req.body.email,
	    password: req.body.password
	  })
	  // pass the result of our call
	  .then(function(dbBurger) {
	    // log the result to our terminal/bash window
	    console.log(dbBurger);
	    // redirect
	    res.redirect("/");
	  });
})

router.put('/:userid', (req, res) => {

})

router.delete('/:userid', (req, res) => {
	
})

module.exports = router;