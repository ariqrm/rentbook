const modelGenre = require('../models/genre')

module.exports = {
  getData: (req, res) => {
    modelGenre.getData()
      .then(result => res.json({ succes: true, message: 'succes get data', data: result, error: [''] }))
      .catch(err => res.json({ succes: false, message: 'fail get data', data: [''], error: err }))
  },
  getDataDetail: (req, res) => {
    const id = req.params.id
    modelGenre.getDetailData(id)
      .then(result => {
        if (result.length === 0) {
          res.json({ succes: false, message: 'genre not found', data: id, error: 'cant get data in database' })
        } else {
          res.json({ succes: true, message: 'succes get detail data', data: result, error: '' })
        }
      })
      .catch(err => res.json({ succes: false, message: 'something wrong', data: id, error: err }))
  },
  deleteData: (req, res) => {
    const id = req.params.id
    modelGenre.deleteGenre(id)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ succes: true, message: 'genre deleted', data: id, error: '' })
        } else if (res.status(404)) {
          res.json({ succes: false, message: 'genre not found', data: id, error: '' })
        } else {
          res.json({ succes: false, message: 'genre can not deleted', data: id, error: '' })
        }
      })
      .catch(err => res.json({ succes: false, message: 'genre can not deleted', data: id, error: err }))
  },
  updateData: (req, res) => {
    const data = {
      NameOfGenre: req.body.NameOfGenre
    }
    const id = {
      id: req.params.id
    }
    modelGenre.updateGenre(data, id)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ succes: true, message: 'updated genre', data: [id, data], error: '' })
        } else {
          res.json({ succes: false, message: 'cant update genre', data: [id, data], error: 'cant get in database' })
        }
      })
      .catch(err => res.json({ succes: false, message: 'cant update genre', data: [id, data], error: err }))
  },
  insertData: (req, res) => {
    const data = {
      NameOfGenre: req.body.NameOfGenre
    }
    modelGenre.insertGenre(data)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ succes: true, message: 'added genre', data: data, error: '' })
        } else {
          res.json({ succes: false, message: 'cant added genre', data: data, error: 'cant get data in database' })
        }
      })
      .catch(err => res.json({ succes: false, message: 'cant added genre', data: data, error: err }))
  }
}
