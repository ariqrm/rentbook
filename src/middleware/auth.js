const modelUser = require('../models/users')
const jwt = require('jsonwebtoken')

module.exports = {
  auth: (req, res, next) => {
    try {
      const secretKey = 'secretkey'
      const token = req.headers.authorization.split(' ')[1]
      const decode = jwt.verify(token, secretKey)
      req.userData = decode
      next()
    } catch (error) {
      res.status(401).json({
        massage: 'Login first'
      })
    }
  },
  authAdmin: (req, res, next) => {
    try {
      const data = req.userData.dataUser
      modelUser.authCheck(data.Email)
        .then(result => {
          const dataUser = result[0]
          delete dataUser.secret_key
          delete dataUser.Password
          if (dataUser.access === 'admin' && data.access === 'admin')
          next()
          else
          res.status(401).json({ massage: 'Access Denied' })
        })
        .catch(error => res.json(error))
    } catch (error) {
      res.status(401).json({
        massage: 'Access Denied'
      })
    }
  },
  checkid: (req, res) => {
    const data = req.userData.dataUser
    res.json({ data: data })
  }
}
