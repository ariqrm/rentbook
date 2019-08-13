const express = require('express')
const Route = express.Router()

const TransactionConttroller = require('../controllers/transaction')

Route
    // all transaction data rent
    .get('/', TransactionConttroller.getTransactionData)
    // add new borrow book
    .post('/borrow/', TransactionConttroller.borrow)
    // add return book
    .post('/return/', TransactionConttroller.return)
    
module.exports = Route