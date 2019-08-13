const conn = require('../configs/db')

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
    getData: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT `Book`.`Title` AS `title`, \
            `Book`.`Description` AS `description`, `Book`.`Image` AS `image`, \
            `Book`.`DateReleased` AS `date_released`, `Genres`.`NameOfGenre` AS `genre`, \
            `Status`.`Status` AS `status` FROM `Book` JOIN `Genres` ON `Book`.`id_genre`=`Genres`.`id` \
            JOIN `Status` ON `Book`.`id_status`=`Status`.`id`', (err, result) => {
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
            conn.query('SELECT `Book`.`Title` AS `title`, \
            `Book`.`Description` AS `description`, `Book`.`Image` AS `image`, \
            `Book`.`DateReleased` AS `date_released`, `Genres`.`NameOfGenre` AS `genre`, \
            `Status`.`Status` AS `status` FROM `Book` JOIN `Genres` ON `Book`.`id_genre`=`Genres`.`id` \
            JOIN `Status` ON `Book`.`id_status`=`Status`.`id` WHERE `Book`.id = ? ', [id], (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    searchDataBook: (title) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT Title, Description FROM Book WHERE Title = "${title}" `, (err, result) => {
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
            conn.query(`SELECT Title, Description FROM Book ORDER BY ? `, col, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}