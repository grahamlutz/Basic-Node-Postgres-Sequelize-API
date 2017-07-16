import session from 'client-sessions'
import express from 'express'
const app = express();

module.exports = (req, res, next) => {
	// Add headers
	app.use(function (req, res, next) {

	    // Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    // Pass to next layer of middleware
	    next();
	});

	app.use(session({
		cookieName: 'session',
		secret: 'rando_secret_goes_here',
		duration: 30*60*1000,
		activeDuration: 10*60*1000,
	}))

	app.use((req, res, next) => {
		if (!req.session || !req.session.user) next();

		db.users.findOne({ email: req.session.user.email }, (err, user) => {
	      if (user) {
	        req.user = user;
	        delete req.user.password; // delete the password from the session
	        req.session.user = user;  //refresh the session value
	        res.locals.user = user;
	      }
	      // finishing processing the middleware and run the route
	      next();
	    });
	})
	next();
}