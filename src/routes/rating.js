const express = require('express')
const Route = express.Router()

const RatingConttroller = require('../controllers/rating')
const auth = require('../middleware/auth')

Route
    // check auth
    // .get('/*', auth.auth)
    // .post('/*', auth.auth, auth.authAdmin)
    // .patch('/*', auth.auth, auth.authAdmin)
    .delete('/*', auth.auth, auth.authAdmin)
    // get all genre
    .get('/', RatingConttroller.getData)
    // get specific genre by id
    .get('/:id', RatingConttroller.getDataDetail)
    // add genre
    .post('/', RatingConttroller.insertData)
    // update genre
    .patch('/:id', RatingConttroller.updateData)
    // delete genre
    .delete('/:id', RatingConttroller.deleteData)

module.exports = Route
