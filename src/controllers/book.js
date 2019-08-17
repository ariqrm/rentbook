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
      .catch(err => res.json({ msg: 'something wrong', error: err.code }))
  },
  getDetailData: (req, res) => {
    const id = req.params.id
    modelBook.getDetailData(id)
      .then(result => res.json(result))
      .catch(err => res.json({ msg: 'something wrong', error: err.code }))
  },
  filterBook: (req, res) => {
    const title = req.body.title || 'a'
    const cols = req.body.colom || 'Title'
    modelBook.filterDataBook(title, cols)
      .then(result => res.json(result))
      .catch(err => res.json({ msg: 'something wrong', error: err.code }))
  },
  sortBook: (req, res) => {
    const col = req.params.col || req.body.col
    modelBook.sortDataBook(col)
      .then(result => res.json(result))
      .catch(err => res.json({ msg: 'something wrong', error: err.code }))
  },
  deleteData: (req, res) => {
    const id = req.params.id
    modelBook.deleteBook(id)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ succes: 'book deleted' })
        } else {
          res.json({ failed: 'book can not deleted' })
        }
      })
      .catch(err => res.json({ msg: 'book can not delete', error: err.code }))
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
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ succes: 'book data updated' })
        } else {
          res.json({ msg: 'something wrong' })
        }
      })
      .catch(err => res.json({ msg: 'something wrong', error: err.code }))
  },
  insertData: (req, res) => {
    const data = req.body
    modelBook.insertBook(data)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ succes: 'book added' })
        } else {
          res.json({ failed: 'book can not added' })
        }
      })
      .catch(err => res.json({ msg: 'something wrong', error: err.code }))
  },
  pagiNation: (req, res) => {
    const limit = req.query.limit || 5
    const page = req.query.offset || 1
    const offset = (page - 1) * limit
    modelBook.pagination(limit, offset)
      .then(result => res.json(result))
      .catch(err => res.json({ msg: 'something wrong', error: err.code }))
  }
}
