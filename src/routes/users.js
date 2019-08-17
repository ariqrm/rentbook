const express = require('express')
const Route = express.Router()

const UserConttroller = require('../controllers/users')
const auth = require('../middleware/auth')
const check = require('../middleware/check')

Route
// get all User
  .get('/', auth.auth, UserConttroller.getData)
// test jwt
  .get('/jwt', auth.auth, auth.checkid)
// add User
  .post('/register', check.checkRegister, UserConttroller.register)
// add User
  .post('/signin', UserConttroller.signin)

module.exports = Route
