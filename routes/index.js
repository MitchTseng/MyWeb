var mongoose = require('mongoose');
var UserInfo = mongoose.model('UserInfo');
var fs = require("fs");


exports.index = function(req, res){
    res.render('index', {user: req.user, title: '安心上路'});
};
