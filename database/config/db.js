var logger = require('./log');
var mongoose = require("mongoose");
//mongoose.Promise = global.Promise;
mongoose.Promise = require('bluebird');
//mongoose.set('debug', true);

var mongoURI = "mongodb://127.0.0.1:27017/book-store-app";
//var mongoURI = "mongodb://192.168.0.30:27017/mean-angular5";
var mongoDB = mongoose.connect(mongoURI, {promiseLibrary: require('bluebird') })
	.then(() =>  console.log("Database connection established: " + mongoURI))
  	.catch((err) => console.error("connection does not established: " + mongoURI,err));

module.exports = mongoose;
