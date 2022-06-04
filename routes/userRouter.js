const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/add', userController.add)
router.post('/login', userController.login)
router.post('/getUserById', userController.getUserById)
router.get('/geAllUsers', userController.geAllUsers)

module.exports = router
