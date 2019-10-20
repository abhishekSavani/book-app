"use strict";
var logger = require("./database/config/log");
var express = require("express");
var https = require('https');
var http = require("http");
var fs = require('fs');
//const resize = require("./resize");
var lib = require("./lib");

var app = express();
var config, sslOptions, httpServer, callSocketDir;
/**
 * @description all process variables
 */
require("./database/config/vars")(app, fs);
config = require("./database/config/config.js")(app, express);
lib.generateMediaStructure();
//callSocketDir = './database/socket';
/**
 *@description Instantiation of an app, create clusters of an process
 */
if (global.hzConfig.isSSl === true) {
    sslOptions = {
        key: fs.readFileSync(global.hzConfig.privateKey),
        cert: fs.readFileSync(global.hzConfig.certificate),
        passphrase: global.hzConfig.passPhrase
    };
    httpServer = https.createServer(sslOptions, app).listen(global.hzConfig.port, function (req, res) {
        logger.log("info", 'Book Store App is listening on ssl port ' + global.hzConfig.port + ", proccess id is " + process.pid + '!');
    });
} else {
    httpServer = http.createServer(app).listen(global.hzConfig.port, function (req, res) {
        logger.log("info", 'Book Store App is listening on port ' + global.hzConfig.port + ", proccess id is " + process.pid + '!');
    });
}

//require(callSocketDir)(app, httpServer);
