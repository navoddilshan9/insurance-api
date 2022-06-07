const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
  message_id: {
    type: String,
    required: true,
  },
  date_time: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Messages', MessageSchema)
