var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var favicon = require('serve-favicon');

var routes = require('./routes');

var passport = require('passport');
var util = require('util');

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

//Set favicon
app.use(favicon(__dirname + '/public/img/favicon.jpeg'));

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

app.listen(app.get('port'), function(){
    console.log('Express server started at port ' + app.get('port'));
});

// Main operations
app.get('/', routes.index);

app.get('/algorithm', routes.algorithm);
app.get('/autocontrol', routes.autocontrol);
app.get('/emsys', routes.emsys);
app.get('/webapplication', routes.webapplication);
app.get('/about', routes.about);

// Passport-Facebook
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});