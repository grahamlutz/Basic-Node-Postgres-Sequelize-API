import express from 'express';
import bodyParser from 'body-parser'

const app = express();
const PORT = process.env.PORT || 1701;
const db = require("./models");

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
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./controllers'));

app.get('/', (req, res) => {
	res.status(200).json([
			  {
				"id": 1,
				"author": "Bryan",
				"text": "Whoooooaaaaa!"
			}, {
				"id": 2,
				"author": "Me",
				"text": "Tada!"
			}, {
				"id": 3,
				"author": "Software Engineer",
				"text": "I did it!"
			}
			]);
})


db.sequelize.sync().then(function() {
  app.listen(PORT);
});