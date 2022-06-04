const mongoose = require('mongoose')

const AccidentSchema = mongoose.Schema({
  description: {
    type: String,
    default: 'This is accident submit description',
  },
  created_at: {
    type: String,
    default: Date.now(),
  },
  location_coordinates: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
  },
})

module.exports = mongoose.model('Accidents', AccidentSchema)
