/**
 *@description  Application Routes
 */
var logger = require("./log");
var methodOverride = require("method-override");
var passport = require("passport");
var lib = require("../../lib");
var resize = require("./resize");
var fs = require("fs");
var path = require("path");

module.exports = function(app, router) {

    /**
     *@description JWT Authentication
     */
    var expressJWT = require("express-jwt");
    logger.log("info", "expressJWT include");
    /**
     * JWT authentication object
     * @type type
     * @description Expalains JWT private key and user property as well as define path which does not requires to access authentication/authorization [acecss without login]
     */
    var allowAccess = expressJWT({
        secret: global.hzConfig.jwtPrivateKey,
        userProperty: 'payload'
    }).unless({
        path: [
                '/api/user/login',
                '/api/user/register',
                // '/api/country/countryList',
                // '/api/state',
                // '/api/city',
                // '/api/user/add',
                // '/api/ethnicity/list',
                // '/api/style/list',
                // '/api/pressure/list',
                // '/api/bodytype/list',
                // '/api/userdetail/add',
                // '/api/userdetail',
                // '/api/photogallery/add',
                // '/api/user/list',
                // '/api/review/add',
                // '/api/user/getMassagerList',
                // '/api/review/getReviewsByUserID',
                // '/api/user/getmassager',
                // '/api/user/getAllMassager',
                // '/api/user/getlistrandomise',
                // '/api/review/getallreviews',
                // '/api/user/getAllOnlineMassager',
                '/adminapi/user/login',
                // '/api/testimonial/getapprovelist'
                // '/uploads/*'
            // '/api/domainVideo/getDomainVideoFrontSide',
            // '/api/common/setFrontSideSiteLanguage',
            // '/api/common/getCountryListAutocomplete',
            //'/media/*',
        ]
    });
    logger.log("info", "allowAccess include");

    /**
     *@description Check authentication token and authorization for following routes [ /api/*, /adminapi/*]
     */
    app.all(["/api/*", "/adminapi/*"], allowAccess, function(req, res, next) {
        logger.log("info", "router authentication");
        logger.log("info", "req");
        logger.log("info", "res");
        logger.log("info", "next");
        
        logger.log("info", 'Request Type :', req.method);
        next();
    });


    //processRoutePath("/var/www/html/mysite_reroute/trunk/database/data/routes");
    // console.log("path", path);
    // console.log("__dirname", __dirname.replace(/\\/g,"/"));
    var route_dir_path = __dirname.replace(/\\/g,"/");
    route_dir_path = route_dir_path.split("/");
    route_dir_path.pop();
    route_dir_path = route_dir_path.join("/");
    route_dir_path = route_dir_path + "/routes";
    processRoutePath(route_dir_path);

    function processRoutePath(route_path) {
        console.log("route_path", route_path);
        fs.readdirSync(route_path).forEach(function(file) {
            console.log("file", file);
            var filepath = route_path + '/' + file;
            console.log("filepath", filepath);
            fs.stat(filepath, function(err, stat) {
                if (stat.isDirectory()) {
                    processRoutePath(filepath);
                } else {
                    console.info('Loading route: ' + filepath);
                    app.use(require(filepath));
                }
            });
        });
    }
    /**
     * @description Directories declarations and generations
     */
    // lib.generateMediaStructure();
    // logger.log("info", "lib.generateMediaStructure()");
    /**
     * @description Image resize middleware
     */
    app.get("/temp/*", function(req, res) {
        logger.log("info", "temp calls");

        //console.log("temp url called:" + req.url);
        var url = req.url.replace("//", "/");
        var filename = path.basename(url);
        //        console.log(url.split("/"));
        //[ '', 'temp', '120x120', 'photo', '1504846080767.jpg' ]

        var folder = url.split("/")[1];
        var scale = url.split("/")[2];
        var originFolder = url.split("/")[3];
        var width = scale.split("x")[0];
        var height = scale.split("x")[1];
        //        console.log(width);
        //        console.log(height);
        //        console.log(scale);
        //        console.log(folder);
        //        console.log(filename);
        //        console.log(originFolder);

        logger.log("info", "resizeImage() starts");
        resize.resizeImage(width, height, originFolder, folder, scale, filename, res);
        logger.log("info", "resizeImage() ends");
        return false;
    });
    app.get("/resize/*", function(req, res) {
        console.log("test resize url called:" + req.url);
        var url = req.url.replace("//", "/");
        logger.log("info", "resize url called: " + url);
        //['', 'resize', '120x120', 'photo', '1504846080767.jpg']

        var folder = url.split("/")[1];
        var scale = url.split("/")[2];
        var originFolder = url.split("/")[3];
        var width = scale.split("x")[0];
        var height = scale.split("x")[1];

        var folder_ = lib.getOriginalFolderReference(originFolder);

        // console.log("folder_ ==>============");
        // console.log(folder_);
        var resizePath = path.join("./", global.hzConfig.resize, scale, folder_);
        var filename = path.basename(url);
        var resizeFileName = path.join(resizePath, filename);
        filename = filename.split("?")[0];

        // console.log("resizePath ====>"+resizePath);
        // console.log("filename ====>"+filename);
        // console.log(fs.existsSync(resizeFileName));
        //return false;

        if (false === fs.existsSync(resizeFileName)) {
            //following line commented because if file not found then send 404 response, no need to resizeImage.
            resize.resizeImage(width, height, originFolder, folder, scale, filename, res);
            // var fileType = filename.split(".");
            // res.writeHead(404, {'Content-Type': 'image/'+fileType[fileType.length -1]});
            // res.end();
            //lib.resize(width, height, folder, scale, filename, res);
            //            if (scale !== "120x120" || scale !== "250x175") {
            //                scale='auto';
            //                lib.resize(width, height, folder, scale, filename, res);
            //            } else {
            //                lib.crop(width, height, folder, scale, filename, res);
            //            }
        } else {
            var img = fs.readFileSync(resizeFileName);
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.end(img, 'binary');
        }
    });
    /**
     *@description Error handlers for development environments
     */

    // [SH] Catch unauthorised errors
    app.use(function(err, req, res, next) {
        logger.log("info", "error routing called");
        //logger.log("error", err.name + ": " + err.message);
        logger.log("error", err);
        if (err.name === 'UnauthorizedError') {
            res.status(401);
            res.json({ status: 0, code: 401, type: "unauthorised", message: err.name + ": " + err.message });
        } else {
            res.status(404);
            res.json({ status: 0, code: 404, type: "ENOENT", message: "file not found" });
        }
    });
    // [SH] Catch unauthorised errors
    //    router.use(function (err, req, res, next) {
    //        res.status(err.status || 401);
    ////        res.render('error', {
    ////            message: err.message,
    ////            error: err
    ////        });
    //
    //    });

    //Development error handler will print stacktrace
    if (app.get('env') === "development") {
        logger.log("info", "app.get('env')");
        router.use(function(err, req, res, next) {
            res.status(err.status || 500);
            if (err) {
                logger.log("error", err.name + ": " + err.message);
            }
            res.json('error', {
                status: err.status,
                message: err.message,
                error: err
            });
        });
    }
    /**
    *@description Set default template for / route, direct access form url, refresh page`
     *All except resize/, api/, vendor/, css/, admin matching string
     */
    //  app.get(/^\/(?!.*api\/.*|.*uploads\/.*|.*resize\/.*|.*vendor\/.*|.*css\/.*|.*admin.*).*$/, function(req, res, err) {
    //     console.log("req.headers.host=" + req.headers.host);
    //     console.log("req.url=" + req.url);
    //     console.log("Index file called-----------------------------------------------site");
    //     console.log("site path=" + path.resolve(__dirname + "/../../dist/index.html"));
    //     res.sendFile(path.resolve(__dirname + "/../../dist/index.html"));
    // });

    /**
     *@description Set default admin template for /admin*(any after admin or admin) route
     */
     app.get("/admins*", function(req, res) {
        console.log("Index file called-----------------------------------------------admin");
        console.log("admin path=" + path.resolve(__dirname + "/../../dist/index.html"));
        res.sendFile(path.resolve(__dirname + "/../../dist/index.html"));
    });

    return app;
};