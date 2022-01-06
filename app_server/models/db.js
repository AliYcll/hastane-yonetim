var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

var mongoDB = 'mongodb:/localhost/hastane_yonetim'

mongoose.connect(mongoDB, function(err, err) {
    if (err) 
        console.log('mongooose hatasi:' + err)
      else 
        console.log('mongoose baglandi:' + mongoDB)
})