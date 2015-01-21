var fs = require("fs");


exports.index = function(req, res){
    res.render('index', {user: req.user, title: "Mitch's Website"});
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

exports.emsys = function(req, res){
    res.render('emsys', {user: req.user, title: "Embedded System"});
};

exports.about = function(req, res){
    res.render('about', {user: req.user, title: "About"});
};