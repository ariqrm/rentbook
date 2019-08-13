const conn = require('../configs/db')

module.exports = {
    borrowBook: (data, id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT id_status FROM `Book` WHERE ?', [id], (err, result) => {
                // console.log('result 1= ', result[0].id_status)
                let error = {error :'buku sudah di pinjam'}
                if (!err && result[0].id_status === 2) {
                    // console.log('result 2= ', result)
                    conn.query('INSERT Transaction SET ?', data, (err, result) => {
                        if (!err) {
                            resolve(result)
                        } else {
                            reject(error)
                        }
                    })
                } else {
                    // console.log('result 3 = ',error)
                    reject(error)
                    // reject(err)
                }
            })
        })
    },
    returnBook: (data, id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT id_status FROM `Book` WHERE ?', [id], (err, result) => {
                // console.log('result 1= ', result[0].id_status)
                let error = { error: 'buku sudah di pinjam' }
                if (!err && result[0].id_status === 1) {
                    // console.log('result 2= ', result)
                    conn.query('INSERT Transaction SET ?', data, (err, result) => {
                        if (!err) {
                            resolve(result)
                        } else {
                            reject(error)
                        }
                    })
                } else {
                    // console.log('result 3 = ',error)
                    reject(error)
                    // reject(err)
                }
            })
        })
    },
    getData: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM Transaction ', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}