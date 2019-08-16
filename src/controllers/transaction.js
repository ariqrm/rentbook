const modelTransaction = require('../models/transaction')
const modelBook = require('../models/book')

module.exports = {
  getTransactionData: (req, res) => {
    modelTransaction.getData()
      .then(result => res.json(result))
      .catch(err => console.log(err))
  },
  borrow: (req, res) => {
    const data = {
      id_book: req.body.id_book,
      id_status: 1,
      id_users: req.userData.dataUser.id
    }
    const dataBook = {
      id_status: 1
    }
    const id = {
      id: req.body.id_book
    }
    modelTransaction.borrowBook(data, id)
      .then(result => modelBook.updateBook(dataBook, id)
        .then(result =>
        // console.log('result 1 = ',result)
          res.json({ success: 'berhasil meminjam' }))
        .catch(error => res.json(error))
      )
      .catch(error => res.json(error))
    // .catch(err => console.log(err))
  },
  return: (req, res) => {
    const data = {
      id_book: req.body.id_book,
      id_status: 2,
      id_users: req.userData.dataUser.id
    }
    const dataBook = {
      id_status: 2
    }
    const id = {
      id: req.body.id_book
    }
    modelTransaction.returnBook(data, id)
      .then(result => modelBook.updateBook(dataBook, id)
        .then(result =>
        // console.log('result 1 = ', result)
          res.json({ success: 'berhasil' }))
        .catch(error => res.json(error))
      )
      .catch(error => res.json(error))
  }
}
