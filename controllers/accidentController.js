const Accident = require('../models/accidentModel')

const submitAccident = async (req, res) => {
  const accident = new Accident(req.body)
  accident
    .save()
    .then((accident) => {
      res.status(200).send(accident)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

const getAllAccident = async (req, res) => {
  Accident.find()
    .then((accidents) => {
      res.status(200).send(accidents)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
const getAccidentById = async (req, res) => {
  Accident.findById(req.body.id)
    .then((accident) => {
      res.status(200).send(accident)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
const getAllAccidentByUserId = async (req, res) => {
  Accident.find({
    user_id: req.body.user_id,
  })
    .then((accidents) => {
      res.status(200).send(accidents)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
const deleteAccidentById = async (req, res) => {
  Accident.findByIdAndRemove(req.body.accident_id)
    .then((accident) => {
      res.status(200).send(accident)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
module.exports = {
  submitAccident,
  getAllAccident,
  getAccidentById,
  getAllAccidentByUserId,
  deleteAccidentById,
}
