var express = require('express')
var path = require('path')
var app = express()
var ejsLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var db = require('./app_server/models/db')

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '/app_server/Views'))

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(ejsLayouts)
app.use('/public', express.static(path.join(__dirname, 'public')))

//yönlendiriciler ekleniyor
require('./app_server/Routes/RouteManager')(app)

 app.listen(8000)