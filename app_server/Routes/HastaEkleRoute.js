var express = require('express')

var router = express.Router()

var ctrlHastaEkle = require('../Controller/HastaEkleController')

router.get('/', ctrlHastaEkle.index)

module.exports = router
