const User = require('../models/User');

exports.home = (req,res) => {
    res.render('home-guest');
}
exports.login = (req,res) => {
    let user = new User(req.body);
    user.login().then(function(result) {
        res.send(result);
    }).catch(function (e){
        res.send(e);
    });
}

exports.register = (req,res) => {
    let user = new User(req.body);
    user.register();
    if(user.errors.length){
        res.send(user.errors);
    } else {
        res.send("Congrats, there are no errors.");
    }
}