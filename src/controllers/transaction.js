const modelTransaction = require('../models/transaction')
const modelBook = require('../models/book')

module.exports = {
  getTransactionData: (req, res) => {
    const id = req.params.id || 4
    modelTransaction.getData(id)
      .then(result => res.json({ succes: true, message: 'succes get data', data: result, error: '' }))
      .catch(err => res.json({ succes: false, message: 'cant get data in database', data: '', error: err.code }))
  },
  borrow: (req, res) => {
    const data = {
      id_book: req.body.id_book,
      id_status: 1,
      id_users: req.body.id_users || 13
    }
    const dataBook = {
      id_status: 1
    }
    const id = {
      id: req.body.id_book
    }
    modelTransaction.borrowBook(data, id)
      .then(() => modelBook.updateBook(dataBook, id)
        .then(() =>
          res.json({ success: true, message: 'succes borrow', data: id, error: '' }))
        .catch(error => res.json({ succes: false, message: 'cant get data in database', data: id, error: error }))
      )
      .catch(error => res.json({ succes: false, message: 'cant get data in database', data: id, error: error }))
  },
  return: (req, res) => {
    const data = {
      id_book: req.body.id_book,
      id_status: 2,
      id_users: req.body.id_users || 13
    }
    const dataBook = {
      id_status: 2
    }
    const id = {
      id: req.body.id_book
    }
    modelTransaction.returnBook(data, id)
      .then(() => modelBook.updateBook(dataBook, id)
        .then(() =>
          res.json({ success: true, message: 'succes borrow', data: id, error: '' }))
        .catch(error => res.json({ succes: false, message: 'cant get data in database', data: id, error: error }))
      )
      .catch(error => res.json({ succes: false, message: 'cant get data in database', data: id, error: error }))
  }
}
