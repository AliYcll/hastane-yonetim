var mongoose = require('mongoose')
var Schema = mongoose.Schema

var doktorSchema = new Schema({
    isim: String,
    soyisim: String,
    telefon: String,
    poliklinik: String,
    kullaniciAdi:{type: String, required:true, unique: true},
    sifre: {type: String, required:true}
})

var doktor = mongoose.model('doktor', doktorSchema)

module.exports = doktor