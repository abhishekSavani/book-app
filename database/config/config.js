var logger = require("./log");
var path = require("path");
logger.log("info", "path included");
var bodyParser = require("body-parser");
logger.log("info", "bodyParser included");
var cookieParser = require("cookie-parser");
logger.log("info", "cookieParser included");
var expressSession = require("express-session");
logger.log("info", "expressSession included");
var methodOverride = require("method-override");
logger.log("info", "methodOverride included");
var passport = require("passport");
logger.log("info", "passport included");
var useragent = require('express-useragent');
logger.log("info", "useragent included");
var compression = require("compression");
logger.log("info", "compression included");
//var lib = require("./lib");
//logger.log("info", "lib included");
var resize = require("./resize");
logger.log("info", "resize included");
var fs = require("fs");
logger.log("info", "fs included");




module.exports = function (app, express) {
    logger.log("info", "************* Router export initiate *************");
    /**
     * @description Use gzip compression
     */
    app.use(compression());
    logger.log("info", "compression middleware..");
    app.use(useragent.express());
    logger.log("info", "useragent middleware..");
    /**
     *@description Serving Static Direcotries
     */
    require("./utils")(express, app, path);
    logger.log("info", "utils middleware..");
    /**
     *@description MongoDB
     */
    
    require("./db");
    logger.log("info", "db middleware..");
    
    /**
     *@description Enable trusted proxy
     */
    app.enable('trust proxy');
    logger.log("info", "trust proxy middleware..");

    app.use(bodyParser.urlencoded({
        extended: false
    }));
    logger.log("info", "bodyParser middleware..");

     // Add this code for maximun 2gb
     app.use(bodyParser.json({limit: '2gb'}));
     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
     limit: '2gb',
     extended: true
     }));

    app.use(bodyParser.json());
    logger.log("info", "bodyParser.json() middleware..");
    app.use(cookieParser());
    logger.log("info", "cookieParser() middleware..");
    /**
     *@description Express Session
     */
    // app.use(expressSession({
    //     secret: global.hzConfig.cookiePrivateKey,
    //     name: 'hz-app',
    //     proxy: true,
    //     resave: true,
    //     saveUninitialized: true,
    //     httponly: true
    // }));
    // logger.log("info", "expressSession() middleware..");
    /**
     *@description Passport Init
     */
    app.use(passport.initialize());
    logger.log("info", "passport.initialize() middleware..");
    app.use(passport.session());
    logger.log("info", "passport.session() middleware..");

    /**
     * @description define headers, methods and allow CORS request for all domains
     */
    app.use(function (req, res, next) {
        logger.log("info", "cross origin policy");
        logger.log("info", "req");
        logger.log("info", "res");
        logger.log("info", "next");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
        next();
    });

    /**
     *@description override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
     */
    app.use(methodOverride('X-HTTP-Method-Override'));
    logger.log("info", "methodOverride() middleware..");
    /*
     *Remove Cache for IE browser for get request
     */
    app.use(function noCache(req, res, next) {
        logger.log("info", "nocache req");
        logger.log("info", "nocache res");
        logger.log("info", "nocache next");
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);
        next();
    });
    var router = express.Router();
    logger.log("info", "router");
    require("./router")(app, router);
    /**
     * *@description Error handlers for statistics leaked to user
     */
    router.use(function (err, req, res, next) {
        console.log("ehll");
        if (err) {
            logger.log("error", err);
        }
        res.status(err.status || 500);
        //    res.render('error', {
        //        message: err.message,
        //        error: {}
        //    });
    });
    /**
     *@description exports an app
     */
    return app;
}