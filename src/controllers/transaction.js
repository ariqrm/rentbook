const modelTransaction = require('../models/transaction')
const modelBook = require('../models/book')

module.exports = {
  getTransactionData: (req, res) => {
    modelTransaction.getData()
      .then(result => res.json(result))
      .catch(err => res.json({ error: err.code }))
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
      .then(() => modelBook.updateBook(dataBook, id)
        .then(() =>
          res.json({ success: 'succes borrow' }))
        .catch(error => res.json(error))
      )
      .catch(error => res.json(error))
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
      .then(() => modelBook.updateBook(dataBook, id)
        .then(() =>
          res.json({ success: 'succes return' }))
        .catch(error => res.json(error))
      )
      .catch(error => res.json(error))
  }
}
