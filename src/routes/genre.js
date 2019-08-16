const express = require('express')
const Route = express.Router()

const GenreConttroller = require('../controllers/genre')
const auth = require('../middleware/auth')

Route
// check auth
  .get('/*', auth.auth)
  .post('/*', auth.auth)
  .patch('/*', auth.auth)
  .delete('/*', auth.auth)
// get all genre
  .get('/', GenreConttroller.getData)
// get specific genre by id
  .get('/:id', GenreConttroller.getDataDetail)
// add genre
  .post('/', GenreConttroller.insertData)
// update genre
  .patch('/:id', GenreConttroller.updateData)
// delete genre
  .delete('/:id', GenreConttroller.deleteData)

module.exports = Route
