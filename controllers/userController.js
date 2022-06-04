const bcrypt = require('bcrypt')
const saltRounds = 5
const User = require('../models/userModel')

const add = async (req, res) => {
  const salt = await bcrypt.genSalt(saltRounds)
  await bcrypt
    .hash(req.body.password, salt)
    .then((hashedPassword) => {
      req.body.password = hashedPassword
      const user = new User(req.body)
      user
        .save()
        .then((user) => {
          res.status(200).send(user)
        })
        .catch((err) => {
          res.status(500).send(err)
        })
    })
    .catch((err) => {
      res.status(500).send(err)(err)
    })
}

const login = async (req, res) => {
  await User.findOne({
    email: req.body.email,
  })
    .then(async (user) => {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.status(200).send(user)
      } else {
        res.send(true)
      }
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

const getUserById = async (req, res) => {
  User.findById(req.body.id)
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

const getAllUsers = async (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).send(users)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
const deleteUserById = async (req, res) => {
  User.findByIdAndRemove(req.body.user_id)
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
module.exports = { add, login, getUserById, getAllUsers, deleteUserById }
