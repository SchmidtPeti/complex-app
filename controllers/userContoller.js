const User = require('../models/User');

exports.home = (req,res) => {
    res.render('home-guest');
}
exports.register = (req,res) => {
    let user = new User(req.body);
    res.send("Tahnks for trying to register!");
}