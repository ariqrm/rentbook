const express = require('express')
const Route = express.Router()

const GenreConttroller = require('../controllers/genre')

Route
    .get('/', GenreConttroller.getData)
    .post('/', GenreConttroller.insertData)
    .patch('/:id', GenreConttroller.updateData)
    .delete('/:id', GenreConttroller.deleteData)
    
module.exports = Route