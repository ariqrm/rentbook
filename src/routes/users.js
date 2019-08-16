const express = require('express')
const Route = express.Router()

const UserConttroller = require('../controllers/users')
const auth = require('../middleware/auth')

Route
// get all User
  .get('/', auth.auth, UserConttroller.getData)
// test jwt
  .get('/jwt', auth.checkid)
// add User
  .post('/register', UserConttroller.register)
// add User
  .post('/signin', UserConttroller.signin)

module.exports = Route
