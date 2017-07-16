import express from 'express'
import bodyParser from 'body-parser'
import middleware from './middleware'

const app = express()
const PORT = process.env.PORT || 1701
const db = require("./models")

app.use('/', middleware(app));

function requireLogin (req, res, next) {
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
};

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./controllers'));

db.sequelize.sync().then(function() {
  app.listen(PORT);
});