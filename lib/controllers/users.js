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
	return res.json({
		'user': req.params.userid,
		'error': false
	})
})

router.post('/', (req, res) => {

})

router.put('/:userid', (req, res) => {

})

router.delete('/:userid', (req, res) => {
	
})

module.exports = router;