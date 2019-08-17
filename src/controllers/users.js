const modelUser = require('../models/users')
const helper = require('../helpers/helpers')
const jwt = require('jsonwebtoken')

module.exports = {
  getData: (req, res) => {
    modelUser.getData()
      .then(result => res.json(result))
      .catch(err => res.json({ error: err.code }))
  },
  register: (req, res) => {
    const secret = helper.generateSecret(18)
    const passwordHash = helper.setPassword(req.body.password, secret)
    const data = {
      email: req.body.email,
      password: passwordHash.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      secret_key: passwordHash.secret
    }
    modelUser.registerUser(data)
      .then(result => res.json(result))
      .catch(err => res.json({ msg: `Data have existed`, error: err.code }))
  },
  signin: (req, res) => {
    const email = req.body.email
    const password = req.body.password

    modelUser.signinUser(email)
      .then(result => {
        const dataUser = result[0]
        const usePassword = helper.setPassword(password, dataUser.secret_key)
        if (usePassword.password === dataUser.Password) {
          delete dataUser.secret_key
          delete dataUser.Password
          const token = jwt.sign({ dataUser }, process.env.SECRET_KEY)
          return res.json({ token: `Bearer ${token}` })
        } else {
          return res.json({ error: 'data not match' })
        }
      })
      .catch((err) => res.json({ msg: `data not match`, error: err.code }))
  },
  testJwt: (req, res) => {
    const token = req.header
    return res.json({ b: token })
  }
}
