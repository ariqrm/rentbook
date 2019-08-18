const modelBook = require('../models/book')

module.exports = {
  getData: (req, res) => {
    const search = req.query.search || null
    const cols = req.query.sort || 'title '
    const by = req.query.by || 'ASC'
    const sort = cols + ' ' + by
    const available = req.query.available || null
    const limit = req.query.limit || 10
    const page = req.query.page || 1
    const offset = (page - 1) * limit
    modelBook.getData(search, sort, available, limit, offset)
      .then(result => res.json({ succes: true, message: 'succes get data', data: result, error: '' }))
      .catch(err => res.json({ succes: false, message: 'something wrong', data: [''], error: err }))
  },
  getDetailData: (req, res) => {
    const id = req.params.id
    modelBook.getDetailData(id)
      .then(result => {
        if (result[0].id === null) {
          res.json({ succes: false, message: 'book not found', data: [''], error: '' })
        } else {
          res.json({ succes: true, message: 'get a data', data: result, error: '' })
        }
      })
      .catch(err => res.json({ succes: false, message: 'book not found', data: [''], error: err }))
  },
  filterBook: (req, res) => {
    const title = req.body.title || 'a'
    const cols = req.body.colom || 'Title'
    modelBook.filterDataBook(title, cols)
      .then(result => res.json({ succes: true, message: 'filtered data', data: result, error: '' }))
      .catch(err => res.json({ succes: false, message: 'something wrong', data: [''], error: err }))
  },
  sortBook: (req, res) => {
    const col = req.params.col || req.body.col
    modelBook.sortDataBook(col)
      .then(result => res.json({ succes: true, message: 'sorted data', data: result, error: '' }))
      .catch(err => res.json({ succes: false, message: 'something wrong', data: [''], error: err }))
  },
  deleteData: (req, res) => {
    const id = req.params.id
    modelBook.deleteBook(id)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ succes: true, message: 'book deleted', data: id, error: '' })
        } else {
          res.json({ succes: false, message: 'book not found', data: id, error: 'not found in database' })
        }
      })
      .catch(err => res.json({ succes: false, message: 'book not found', data: id, error: err }))
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
          res.json({ succes: true, message: 'book data updated', data: data, error: '' })
        } else {
          res.json({ succes: false, message: 'something wrong', data: [''], error: '' })
        }
      })
      .catch(err => res.json({ succes: false, message: 'something wrong', data: [''], error: err }))
  },
  insertData: (req, res) => {
    const data = req.body
    modelBook.insertBook(data)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ succes: true, message: 'book added', data: data, error: '' })
        } else {
          res.json({ succes: false, message: 'something wrong', data: data, error: 'book can not added' })
        }
      })
      .catch(err => res.json({ succes: false, message: 'something wrong', data: data, error: err }))
  },
  pagiNation: (req, res) => {
    const limit = req.query.limit || 5
    const page = req.query.offset || 1
    const offset = (page - 1) * limit
    modelBook.pagination(limit, offset)
      .then(result => res.json({ succes: true, message: 'get data', data: result, error: '' }))
      .catch(err => res.json({ succes: false, message: 'something wrong', data: [''], error: err }))
  }
}
