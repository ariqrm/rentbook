const conn = require('../configs/db')

module.exports = {
  insertGenre: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT Rating SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  updateGenre: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE Rating SET ? WHERE ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  deleteGenre: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM Rating WHERE id = ?', [id], (err, result) => {
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
      conn.query('SELECT * FROM `Rating` ORDER BY id ASC', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  getDetailData: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM `Rating` WHERE id = ? ', [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}
