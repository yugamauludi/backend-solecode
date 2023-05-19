const express = require('express')
const router = express.Router()
const schedule_router = require ('./schedule_router')




router.use('/', schedule_router)




module.exports = router