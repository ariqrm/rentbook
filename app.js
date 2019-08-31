require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const Cors = require('cors')

const BookRoute = require('./src/routes/book')
const GenreRoute = require('./src/routes/genre')
const TransactionRoute = require('./src/routes/transaction')
const UserRoute = require('./src/routes/users')

const port = process.env.SERVER_PORT || 3306
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '192.168.6.120')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   res.setHeader('Access-Control-Allow-Credentials', 'true')
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, access-control-allow-origin')
//   next()
// })

// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200
// }

// app.use(cors())

app.use((req, res, next) => {
  console.log('Someone Logged with method', req.method, 'at', Date.now(), 'in', req.url)
  next()
})
app.use(Cors())
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.get("/no-cors", (req, res) => {
//   console.info("GET /no-cors");
//   res.json({
//     text: "You should not see this via a CORS request."
//   });
// });
app.use('/books', BookRoute)
app.use('/genre', Cors(), GenreRoute)
app.use('/transaction', TransactionRoute)
app.use('/user', UserRoute)
app.use('/', (req, res) => res.status(404).json({ message: '404 not found' }))
