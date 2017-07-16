import express from 'express'
import bodyParser from 'body-parser'
import session from 'client-sessions'

const app = express()
const PORT = process.env.PORT || 1701
const db = require("./models")
const middleware = require('./middleware')

app.use(middleware);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./controllers'));

db.sequelize.sync().then(function() {
  app.listen(PORT);
});