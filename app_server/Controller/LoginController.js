module.exports.indexGet = function (req,res){
    res.render('login')
}

module.exports.indexPost = function (req,res){

    console.log(req.body)

    res.render('login',{
    username: req.body.username,
    password: req.body.password
    })
    
}