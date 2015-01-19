var fs = require("fs");


exports.index = function(req, res){
    res.render('index', {user: req.user, title: "Welcome to Mitch's Website"});
};
