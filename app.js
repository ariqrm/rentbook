require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const BookRoute = require('./src/routes/book')
const GenreRoute = require('./src/routes/genre')
const TransactionRoute = require('./src/routes/transaction')
const UserRoute = require('./src/routes/users')

const port = process.env.SERVER_PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/book', BookRoute)
app.use('/genre', GenreRoute)
app.use('/transaction', TransactionRoute)
app.use('/user', UserRoute)
app.use('/', (req, res) => res.status(404).json({ msg: 'not found' }))
