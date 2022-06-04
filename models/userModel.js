const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  nic: {
    type: String,
    unique: true,
  },
  user_name: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  no: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  activation_key: {
    type: String,
    default: null,
  },
})

module.exports = mongoose.model('Users', UserSchema)
