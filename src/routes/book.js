const express = require('express')
const Route = express.Router()

const BookConttroller = require('../controllers/book')
const auth = require('../middleware/auth')

Route
// check auth
  // .get('/*', auth.auth)
  .post('/*', auth.auth, auth.authAdmin)
  .patch('/*', auth.auth, auth.authAdmin)
  .delete('/*', auth.auth, auth.authAdmin)
// Get All data book
  .get('/', BookConttroller.getData)
  .get('/year', BookConttroller.getDataYear)
// insert Data book
  .post('/', BookConttroller.insertData)
// sort by col table book
  .get('/sort/:col', BookConttroller.sortBook)
  .post('/sort/', BookConttroller.sortBook)
// get specific data with id book
  .get('/:id', BookConttroller.getDetailData)
// pagination book
  .get('/page/limit', BookConttroller.pagiNation)
// filter by title book
  .get('/filter/s', BookConttroller.filterBook)
  .post('/filter', BookConttroller.filterBook)
// update data book
  .patch('/:id', BookConttroller.updateData)
// delete data book
  .delete('/:id', BookConttroller.deleteData)

module.exports = Route
