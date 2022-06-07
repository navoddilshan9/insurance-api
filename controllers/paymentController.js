const Payment = require('../models/paymentModel')

const pay = async (req, res) => {
  const payment = new Payment(req.body)
  payment
    .save()
    .then((pay) => {
      res.status(200).send(pay)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

const getAllPayments = async (req, res) => {
  Payment.find()
    .then((payments) => {
      res.status(200).send(payments)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

const getAllPaymentsByUserId = async (req, res) => {
  Payment.find({
    user_id: req.body.userId,
  })
    .then((payments) => {
      res.status(200).send(payments)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
module.exports = {
  pay,
  getAllPayments,
  getAllPaymentsByUserId,
}
