var express = require('express')

var router = express.Router()

var ctrlHome = require('../Controller/HomeController')

router.get('/', ctrlHome.index)

module.exports = router
