const modelBook = require('../models/book')

module.exports = {
  getData: (req, res) => {
    const search = req.query.search || null
    const cols = req.query.sort || 'title '
    const by = req.query.by || 'ASC'
    const sort = cols + ' ' + by
    const available = req.query.available || null
    const limit = req.query.limit || 5
    const page = req.query.page || 1
    const offset = (page - 1) * limit
    modelBook.getData(search, sort, available, limit, offset)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  },
  getDetailData: (req, res) => {
    const id = req.params.id
    modelBook.getDetailData(id)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  },
  filterBook: (req, res) => {
    const title = req.body.title || 'a'
    const cols = req.body.colom || 'Title'
    const a = req.body.colom || 'Title'
    console.log('this :', cols, ' this title :', title)
    modelBook.filterDataBook(title, cols, a)
    // console.log('this :', cols, ' this title :', title)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  },
  sortBook: (req, res) => {
    const col = req.params.col || req.body.col
    // console.log('params : ', col)
    modelBook.sortDataBook(col)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  },
  deleteData: (req, res) => {
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
  },
  pagiNation: (req, res) => {
    const limit = req.query.limit || 5
    const page = req.query.offset || 1
    const offset = (page - 1) * limit
    // console.log('this limit : ', limit, 'this offset : ', offset)
    modelBook.pagination(limit, offset)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  }
}
