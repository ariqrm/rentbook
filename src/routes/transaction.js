const express = require('express')
const Route = express.Router()

const TransactionConttroller = require('../controllers/transaction')
const auth = require('../middleware/auth')

Route
// check auth
  // .get('/*', auth.auth)
  // .post('/*', auth.auth, auth.authAdmin)
// all transaction data rent book
  .get('/', TransactionConttroller.getTransactionData)
  .get('/:id', TransactionConttroller.getTransactionData)
  .get('/borrowed/:id', TransactionConttroller.getBorrowedData)
  .get('/returned/:id', TransactionConttroller.getReturnedData)
  .get('/check/borrowed/:id', TransactionConttroller.checkBorrowed)
// add new borrow book
  .post('/borrow/', TransactionConttroller.borrow)
// add accept book
  .patch('/accept/', TransactionConttroller.accept)
// add return book
  .patch('/return/', TransactionConttroller.return)

module.exports = Route
