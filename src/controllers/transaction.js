const modelTransaction = require('../models/transaction')
const modelBook = require('../models/book')

module.exports = {
  getTransactionData: (req, res) => {
    const id = req.params.id || 4
    modelTransaction.getData(id)
      .then(result => res.json({
        success: true,
        message: 'succes get data',
        data: result,
        error: ''
      }))
      .catch(err => res.json({
        success: false,
        message: 'cant get data in database',
        data: '',
        error: err.code
      }))
  },
  getBorrowedData: (req, res) => {
    const id = req.params.id || 0
    modelTransaction.getDataBorrowed(id)
      .then(result => res.json({
        success: true,
        message: 'succes get data',
        data: result,
        error: ''
      }))
      .catch(err => res.json({
        success: false,
        message: 'Data not found',
        data: '',
        error: err.code
      }))
  },
  getReturnedData: (req, res) => {
    const id = req.params.id || 0
    modelTransaction.getDataReturn(id)
      .then(result => res.json({
        success: true,
        message: 'succes get data',
        data: result,
        error: ''
      }))
      .catch(err => res.json({
        success: false,
        message: 'Data not found',
        data: '',
        error: err.code
      }))
  },
  borrow: (req, res) => {
    const data = {
      id_book: req.body.id_book,
      id_status: 3,
      id_users: req.body.id_users
    }
    const dataBook = {
      id_status: 3
    }
    const id = req.body.id_book
    modelTransaction.borrowBook(data, id)
      .then(() => modelBook.updateBook(dataBook, id)
        .then(() =>
          res.json({ success: true, message: 'success borrow', data: id, error: '' }))
        .catch(error => res.json({ success: false, message: 'cant get data in database', data: id, error: error }))
      )
      .catch(error => res.json({ success: false, message: 'cant get data in database', data: id, error: error }))
  },
  accept: (req, res) => {
    const data = {
      Accepted: new Date(),
      id_book: req.body.id_book,
      id_status: 1,
    }
    const dataBook = {
      id_status: 1
    }
    const id = req.body.id_book
    modelTransaction.borrowBookAccept(data, id)
      .then(() => modelBook.updateBook(dataBook, id)
        .then(() =>
          res.json({ success: true, message: 'success accept', data: id, error: '' }))
        .catch(error => res.json({ success: false, message: 'cant get data in database', data: id, error: error }))
      )
      .catch(error => res.json({ success: false, message: 'cant get data in database', data: id, error: error }))
  },
  return: (req, res) => {
    const data = {
      Returned: new Date(),
      id_book: req.body.id_book,
      id_status: 2,
    }
    const dataBook = {
      id_status: 2
    }
    const id = req.body.id_book
    modelTransaction.returnBook(data, id)
      .then(() => modelBook.updateBook(dataBook, id)
        .then(() =>
          res.json({ success: true, message: 'success return', data: id, error: '' }))
        .catch(error => res.json({ success: false, message: 'cant get data in database', data: id, error: error }))
      )
      .catch(error => res.json({ success: false, message: 'cant get data in database', data: id, error: error }))
  },
  checkBorrowed: (req, res) => {
    const idbook = req.params.id
    modelTransaction.checkBorrowed(idbook)
      .then(result => res.json({ success: true, message: 'check success', data: result, error: '' }))
      .catch(error => res.json({ success: false, message: 'check fail', data: error, error: error }))
  }
}
