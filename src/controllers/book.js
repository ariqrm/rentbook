const modelBook = require('../models/book')
const multer = require('../middleware/multer')
const cloudinaryConfig = require('../configs/cloudinaryConfig')

module.exports = {
  getDataYear: (req, res) => {
    modelBook.getYear()
    .then(result => res.json({ success: true, message: 'succes get data', data: result, error: '' }))
    .catch(err => res.json({ success: false, message: 'something wrong', data: [''], error: err }))
  },
  getData: (req, res) => {
    const coloum = req.query.coloum || 'B.Title'
    const search = req.query.search || null
    const cols = req.query.sort || 'id'
    const by = req.query.by || 'DESC'
    const sort = cols + ' ' + by
    const available = req.query.available || null
    const limit = req.query.limit || 12
    const page = req.query.page || 1
    const offset = (page - 1) * limit
    modelBook.getData(coloum, search, sort, available, limit, offset)
      .then(result => res.json({ success: true, message: 'succes get data', data: result, error: '' }))
      .catch(err => res.json({ success: false, message: 'something wrong', data: [''], error: err }))
  },
  getDetailData: (req, res) => {
    const id = req.params.id
    modelBook.getDetailData(id)
      .then(result => {
        if (result[0].id === null) {
          res.json({ success: false, message: 'book not found', data: [''], error: '' })
        } else {
          res.json({ success: true, message: 'get a data', data: result, error: '' })
        }
      })
      .catch(err => res.json({ success: false, message: 'book not found', data: [''], error: err }))
  },
  filterBook: (req, res) => {
    const title = req.body.title || 'a'
    const cols = req.body.colom || 'Title'
    modelBook.filterDataBook(title, cols)
      .then(result => res.json({ success: true, message: 'filtered data', data: result, error: '' }))
      .catch(err => res.json({ success: false, message: 'something wrong', data: [''], error: err }))
  },
  sortBook: (req, res) => {
    const col = req.params.col || req.body.col
    modelBook.sortDataBook(col)
      .then(result => res.json({ success: true, message: 'sorted data', data: result, error: '' }))
      .catch(err => res.json({ success: false, message: 'something wrong', data: [''], error: err }))
  },
  deleteData: (req, res) => {
    const id = req.params.id
    modelBook.deleteBook(id)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ success: true, message: 'book deleted', data: id, error: '' })
        } else {
          res.json({ success: false, message: 'book not found', data: id, error: 'not found in database' })
        }
      })
      .catch(err => res.json({ success: false, message: 'book not found', data: id, error: err }))
  },
  updateData: (req, res) => {
    let status = 2
    if (req.body.status === 'available') {
      status = 2
    }else{
      status = 1
    }
    const data = {
      Title: req.body.title,
      Description: req.body.description,
      Image: req.body.image,
      DateReleased: req.body.date_released,
      id_genre: req.body.genre,
      id_status: status
    }
    const id = req.params.id
    modelBook.updateBook(data, id)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ success: true, message: 'book data updated', data: data, error: '' })
        } else {
          res.json({ success: false, message: 'something wrong', data: [''], error: '' })
        }
      })
      .catch(err => res.json({ success: false, message: 'something wrong', data: [''], error: err }))
  },
  insertData: (req, res) => {
    const imageData = { image: req.file }
    if (imageData.image) {
      const file = multer.dataUri(req).content
      return cloudinaryConfig.uploader.upload(file)
        .then(result => {
          const data = {
            Title: req.body.Title,
            Description: req.body.Description,
            Image: result.secure_url,
            DateReleased: req.body.DateReleased,
            id_genre: req.body.id_genre,
            id_status: 2,
          }
          modelBook.insertBook(data)
            .then(result => {
              if (result.affectedRows === 1) {
                res.json({ success: true, message: 'book added', data: data, error: '' })
              } else {
                res.json({ success: false, message: 'something wrong', data: data, error: 'book can not added' })
              }
            })
            .catch(err => res.json({ success: false, message: 'something wrong', data: data, error: err }))
        })
    }
  },
  pagiNation: (req, res) => {
    const limit = req.query.limit || 5
    const page = req.query.offset || 1
    const offset = (page - 1) * limit
    modelBook.pagination(limit, offset)
      .then(result => res.json({ success: true, message: 'get data', data: result, error: '' }))
      .catch(err => res.json({ success: false, message: 'something wrong', data: [''], error: err }))
  }
}
