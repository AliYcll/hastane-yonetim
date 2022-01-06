var express = require('express')

var router = express.Router()

var ctrlLogin = require('../Controller/LoginController')

router.get('/', ctrlLogin.indexGet)
router.post('/', ctrlLogin.indexPost)

module.exports = router
