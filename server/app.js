'use strict';

var compression = require('compression')
const express = require('express');
var httpsRedirect = require('express-https-redirect');

const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');

// connect to database with mongoose
require('./components/utils/dbconnect');

// initialize express app
const app = express();

// redirect all to secured traffic
app.use(httpsRedirect(true));


app.use(cookieparser('cscie31-secret'));
app.use(
	session({
		secret: 'cscie31',
		resave: 'true',
		saveUninitialized: 'true'
	})
);

app.use(logger('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


// set the request headers to allow cross origin resource sharing
app.use('/api', function(req, res, next) {
	res.set({
	  'Access-Control-Allow-Origin':'*',
	  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
	  'Content-type': 'application/json',
	});
   
	if (req.method === 'OPTIONS') {
	  return res.status(200).end();
	}
	next();
});
  
// setup routes
const apiQuestions = require('./components/routes/api/api-questions');
app.use('/api/questions', apiQuestions);

// setup routes
const apiCategory = require('./components/routes/api/api-category');
app.use('/api/category', apiCategory);

// add angular files
app.use('/', express.static(path.join(__dirname,'../client/dist')));

// add gz deflate
app.use(compression);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	res.redirect('/');
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

//console.log({...process.env, APP_DB_USER:'', APP_DB_PASSWORD:''});

module.exports = app;