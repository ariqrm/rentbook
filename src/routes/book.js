const express = require('express')
const Route = express.Router()

const BookConttroller = require('../controllers/book')

Route
    // Get All data book
    .get('/', BookConttroller.getData)
    // insert Data book
    .post('/', BookConttroller.insertData)
    // sort by col table book
    .get('/sort/:col', BookConttroller.sortBook)
    .post('/sort/', BookConttroller.sortBook)
    // get specific data with id book
    .get('/:id', BookConttroller.getDetailData)
    // search by title book 
    .get('/s/:title', BookConttroller.searchBook)
    // update data book
    .patch('/:id', BookConttroller.updateData)
    // delete data book
    .delete('/:id', BookConttroller.deleteData)
    
module.exports = Route