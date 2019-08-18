const conn = require('../configs/db')
const sql = `SELECT B.Title AS title, B.Description AS description, \
            B.Image AS image, B.DateReleased AS date_released, \
            G.NameOfGenre AS genre, S.Status AS status \
            FROM Book AS B JOIN Genres AS G ON B.id_genre=G.id \
            JOIN Status AS S ON B.id_status=S.id`
module.exports = {
  insertBook: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT Book SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  updateBook: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE Book SET ? WHERE ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  deleteBook: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM Book WHERE id = ? ', [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  getData: (search, sort, available, limit, offset) => {
    return new Promise((resolve, reject) => {
      let query = ''
      if (search != null || sort != null || available != null) {
        query += search || available ? ` WHERE` : ``
        query += available ? ` S.Status = '${available}'` : ``
        query += search && available ? ` AND` : ``
        query += search ? ` B.Title LIKE "%${search}%"` : ``
        query += sort ? ` ORDER BY B.${sort}` : ``
      }
      conn.query(`${sql + query} LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
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
      conn.query(`${sql} WHERE B.id = ? `, [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  filterDataBook: (title, cols) => {
    return new Promise((resolve, reject) => {
      // console.log('this :',[cols],' this title :', {title})
      conn.query(`${sql} WHERE ${cols} LIKE "%${title}%" `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  sortDataBook: (col) => {
    return new Promise((resolve, reject) => {
      // console.log('this :',sql)
      conn.query(`${sql} ORDER BY B.${col} `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  pagination: (limit, offset) => {
    return new Promise((resolve, reject) => {
      conn.query(`${sql} LIMIT ${limit} OFFSET ${offset} `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}
