const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
  },
  NIC: {
    type: String,
  },
  email: {
    type: String,
  },
  No: {
    type: String,
  },
  NIC: {
    type: String,
  },
  street: {
    type: String,
  },
  sity: {
    type: String,
  },
  activation_key: {
    type: String,
    default: null,
  },
})

module.exports = mongoose.model('Users', UserSchema)
