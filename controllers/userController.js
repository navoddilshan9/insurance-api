const User = require('../models/userModel')

const add = async (req, res) => {
  const user = new User(req.body)
  user
    .save()
    .then((user) => {
      res.send(user)
    })
    .catch((err) => {
      res.send(err)
    })
}

module.exports = { add }
