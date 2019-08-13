const modelGenre = require('../models/genre')

module.exports = {
    getData: (req, res) => {
        modelGenre.getData()
            .then(result => res.json(result))
            .catch(err => console.log(err))

    },
    deleteData: (req, res) =>{
        const id = req.params.id
        modelGenre.deleteGenre(id)
            .then(result => res.json(result))
            .catch(err => console.log(err))
    },
    updateData: (req, res) => {
        const data = {
            NameOfGenre: req.body.NameGenre
        }
        const id = {
            id: req.params.id
        }
        modelGenre.updateGenre(data, id)
            .then(result => res.json(result))
            .catch(err => console.log(err))
    },
    insertData: (req, res) => {
        const data = {
            NameOfGenre: req.body.NameGenre
        }
        modelGenre.insertGenre(data)
            .then(result => res.json(result))
            .catch(err => console.log(err))
    }
}