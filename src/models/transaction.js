const conn = require('../configs/db')

module.exports = {
  borrowBook: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT id_status FROM `Book` WHERE ?', [id], (err, result) => {
        const error = { error: 'book not available' }
        if (!err && result[0].id_status === 2) {
          conn.query('INSERT Transaction SET ?', data, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(error)
            }
          })
        } else {
          reject(error)
        }
      })
    })
  },
  returnBook: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT id_status FROM `Book` WHERE ?', [id], (err, result) => {
        const error = { error: 'book already exists' }
        if (!err && result[0].id_status === 1) {
          conn.query('INSERT Transaction SET ?', data, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(error)
            }
          })
        } else {
          reject(error)
        }
      })
    })
  },
  getData: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM Transaction WHERE id_users = ${id}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}
