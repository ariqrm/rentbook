const conn = require('../configs/db')

module.exports = {
  insertUser: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT Users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  signinUser: (email) => {
    return new Promise((resolve, reject) => {
      const error = { Fail: 'email or password false' }
      conn.query(`SELECT * from Users WHERE Email = '${email}'`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  authCheck: (email) => {
    return new Promise((resolve, reject) => {
      const error = { Fail: 'email or password false' }
      conn.query(`SELECT * from Users WHERE Email = '${email}'`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  registerUser: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT Users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  getData: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT id, Email, Username, Full_name, access, create_at, update_at FROM `Users` ', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  // SELECT * FROM `Book`
  // WHERE year(`DateReleased`) = 2016
  checkData: (email) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM Users WHERE email = '${email}'`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}
