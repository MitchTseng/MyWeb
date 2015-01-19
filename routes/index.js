var fs = require("fs");


exports.index = function(req, res){
    res.render('index', {user: req.user, title: "Welcome! Here is my Work Collection."});
};

exports.algorithm = function(req, res){
    res.render('algorithm', {user: req.user, title: "Algorithms"});
};

exports.autocontrol = function(req, res){
    res.render('autocontrol', {user: req.user, title: "Automatic Control"});
};

exports.webapplication = function(req, res){
    res.render('webapplication', {user: req.user, title: "Web Application"});
};