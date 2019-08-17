const modelGenre = require('../models/genre')

module.exports = {
  getData: (req, res) => {
    modelGenre.getData()
      .then(result => res.json(result))
      .catch(err => res.json({ error: err.code }))
  },
  getDataDetail: (req, res) => {
    const id = req.params.id
    modelGenre.getDetailData(id)
      .then(result => {
        if (result.length === 0) {
          res.json({ msg: 'genre not found' })
        } else {
          res.json(result)
        }
      })
      .catch(err => res.json({ error: err.code }))
  },
  deleteData: (req, res) => {
    const id = req.params.id
    modelGenre.deleteGenre(id)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ msg: 'genre deleted' })
        } else if (res.status(404)) {
          res.json({ msg: 'genre not found' })
        } else {
          res.json({ msg: 'genre can not deleted' })
        }
      })
      .catch(err => res.json({ msg: 'genre can not deleted', error: err.code }))
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
          res.json({ msg: 'updated genre' })
        } else {
          res.json({ msg: 'cant updated genre' })
        }
      })
      .catch(err => res.json({ msg: 'cant updated genre', error: err.code }))
  },
  insertData: (req, res) => {
    const data = {
      NameOfGenre: req.body.NameOfGenre
    }
    modelGenre.insertGenre(data)
      .then(result => {
        if (result.affectedRows === 1) {
          res.json({ msg: 'added genre' })
        } else {
          res.json({ msg: 'cant added genre' })
        }
      })
      .catch(err => res.json({ msg: 'cant added genre', error: err.code }))
  }
}
