import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	return res.json({
		'users': 'ALL',
		'error': false
	})
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