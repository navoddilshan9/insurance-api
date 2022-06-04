const express = require('express')
const router = express.Router()
const accidentController = require('../controllers/accidentController')

router.post('/submitAccident', accidentController.submitAccident)
router.post('/getAllAccident', accidentController.getAllAccident)
router.post('/getAccidentById', accidentController.getAccidentById)
router.post(
  '/getAllAccidentByUserId',
  accidentController.getAllAccidentByUserId
)
router.post('/deleteAccidentById', accidentController.deleteAccidentById)

router.post(
  '/getAllAccidentByUserId',
  accidentController.getAllAccidentByUserId
)

module.exports = router
