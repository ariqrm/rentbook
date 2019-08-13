const express = require('express')
const Route = express.Router()

const TransactionConttroller = require('../controllers/transaction')

Route
    .get('/', TransactionConttroller.getTransactionData)
    .post('/borrow/', TransactionConttroller.borrow)
    .post('/return/', TransactionConttroller.return)
    
module.exports = Route