const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  email: {
    type: String,
  },
  nic: {
    type: String,
  },
  user_name: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
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
