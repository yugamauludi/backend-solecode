const express = require('express')
const Controller = require('../controllers/schedule_controller')
const router = express.Router()


router.get('/', Controller.find_all)







module.exports = router