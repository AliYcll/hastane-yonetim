var routeLogin = require('./LoginRoute')
var routeHome = require('./HomeRoute')
var routeHastaEkle = require('./HastaEkleRoute')

module.exports = function(app){
    app.use('/login', routeLogin)
    app.use('/', routeHome)
    app.use('/HastaEkle', routeHastaEkle)
}