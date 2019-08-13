const express = require('express')
const Route = express.Router()

const BookConttroller = require('../controllers/book')

Route
    .get('/', BookConttroller.getData)
    .post('/', BookConttroller.insertData)
    .get('/sort/:col', BookConttroller.sortBook)
    .get('/:id', BookConttroller.getDetailData)
    .get('/s/:title', BookConttroller.searchBook)
    .patch('/:id', BookConttroller.updateData)
    .delete('/:id', BookConttroller.deleteData)
    
module.exports = Route