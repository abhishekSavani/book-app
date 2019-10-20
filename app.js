// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var path = require('path');
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 3000; 				// set the port

var morgan = require('morgan'); 		// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var expressSession = require('express-session');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration ===============================================================
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mean-angular5', {promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// must use cookieParser before expressSession
app.use(cookieParser());
app.use(expressSession({secret:'somesecrettokenhere',resave: true,saveUninitialized: true}));

app.use("/root", express.static(path.resolve("/")));
app.use("/dist", express.static(path.resolve("dist")));
app.use("/admin_dist", express.static(path.resolve("admin_dist")));

app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
// routes ======================================================================
app.use(require('./database/routes/book'));

/**
     *@description Set default template for / route, direct access form url, refresh page
     *All except resize/, api/, vendor/, css/, admin matching string
     *
     */
    app.get(/^\/(?!.*api\/.*|.*resize\/.*|.*vendor\/.*|.*css\/.*|.*admin.*).*$/, function(req, res, err) {
        console.log("req.headers.host=" + req.headers.host);
        console.log("req.url=" + req.url);
        console.log("Index file called-----------------------------------------------site");
        console.log("site else path=" + path.resolve(__dirname + "/dist/index.html"));
        res.sendFile(path.resolve(__dirname + "/dist/index.html"));
    });
    
    /**
     *@description Set default admin template for /admin*(any after admin or admin) route
     */
    app.get("/admin*", function(req, res) {
        console.log("Index file called-----------------------------------------------admin");
        console.log("admin path=" + path.resolve(__dirname + "/admin_dist/index.html"));
        res.sendFile(path.resolve(__dirname + "/admin_dist/index.html"));
    });

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);