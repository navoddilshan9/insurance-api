const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/paymentController')

router.post('/pay', paymentController.pay)
router.get('/getAllPayments', paymentController.getAllPayments)
router.post('/getAllPaymentsByUserId', paymentController.getAllPaymentsByUserId)

module.exports = router
