const jwt = require('jsonwebtoken')

module.exports = {
  auth: (req, res, next) => {
    try {
      const secretKey = process.env.SECRET_KEY
      const token = req.headers.authorization.split(' ')[1]
      const decode = jwt.verify(token, secretKey)
      req.userData = decode
      next()
    } catch (error) {
      return res.status(401).json({
        massage: 'Login first'
      })
    }
  },
  checkid: (req, res) => {
    const data = req.userData.dataUser.Email
    return res.json({ Email: data })
  }
}
