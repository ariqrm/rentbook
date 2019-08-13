const modelBook = require('../models/book')

module.exports = {
    getData: (req, res) => {
        modelBook.getData()
            .then(result => res.json(result))
            .catch(err => console.log(err))

    },
    getDetailData: (req, res) => {
        const id = req.params.id
        modelBook.getDetailData(id)
            .then(result => res.json(result))
            .catch(err => console.log(err))

    },
    searchBook: (req, res) => {
        const title = req.params.title
        modelBook.searchDataBook(title)
            .then(result => res.json(result))
            .catch(err => console.log(err))

    },
    sortBook: (req, res) => {
        const col = req.params.col || req.body.col
        console.log('params : ', col)
        modelBook.sortDataBook(col)
            .then(result => res.json(result))
            .catch(err => console.log(err))

    },
    deleteData: (req, res) =>{
        const id = req.params.id
        modelBook.deleteBook(id)
            .then(result => res.json(result))
            .catch(err => console.log(err))
    },
    updateData: (req, res) => {
        const data = {
            Title: req.body.title,
            Description: req.body.description,
            Image: req.body.image,
            DateReleased: req.body.dateReleased,
            id_genre: req.body.genre,
            id_status: req.body.status,
            update_at: new Date()
        }
        const id = {
            id: req.params.id
        }
        modelBook.updateBook(data, id)
            .then(result => res.json(result))
            .catch(err => console.log(err))
    },
    insertData: (req, res) => {
        const data = req.body
        modelBook.insertBook(data)
            .then(result => res.json(result))
            .catch(err => console.log(err))
    }
}