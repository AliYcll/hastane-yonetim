var mongoose = require('mongoose')
var Schema = mongoose.Schema

var hastaSchema = new Schema({
    isim: String,
    soyisim: String,
    telefon: String,
    tckimlik: String,
    kan: String,
    cinsiyet: String,
    yas: String,
    email: String,
    adres: String

})

var hasta = mongoose.model('hasta', hastaSchema)



module.exports = hasta