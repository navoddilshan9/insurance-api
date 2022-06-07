const mongoose = require('mongoose')

const PaymentSchema = mongoose.Schema({
  payment_date_time: {
    type: String,
  },
  payment_amount: {
    type: String,
  },
  payment_method: {
    type: String,
  },
  user_id: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Payments', PaymentSchema)
