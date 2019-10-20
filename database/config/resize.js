/*
 * @Author: user7
 * @Date:   2018-10-03 14:57:10
 * @Last Modified by:   user7
 * @Last Modified time: 2018-10-03 15:06:30
 * @Purpose : Common libraries used at server
 */
var logger = require("./log");
var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");
var im = require("imagemagick");
var gm = require("gm");
var sizeOf = require("image-size");
var lib = require('../../lib');
var async = require("async");

// Resize image
var resizeImage = function (width, height, originFolder, fakeFolder, scale, fileName, res) {
    // console.log("call 00000");
    var resizeOption, resizePath, tempPath;
    var arrAspectRatio = [], arrFixWidth = [], arrFixHeight = [];
    var resizeWidth, resizeHeight, scaleWidth, scaleHeight;
    var originalHeight, originalWidth;
    async.waterfall([
        function (callback) {
            // console.log("call 11111");
            resizeWidth = scaleWidth = width;
            resizeHeight = scaleHeight = height;
            if (fakeFolder === "temp") {
                originFolder = lib.getOriginalFolderReference(originFolder);
                resizePath = path.join(lib.getApplicationDir(), global.hzConfig.temp, fileName);
            } else {
                // console.log("originalPath ===>"+lib.getOriginalFolderReference(originFolder));
                // console.log("@@@@@@@@@@@@@@@@@@@@@ "+lib.getApplicationDir());
                originFolder = lib.getOriginalFolderReference(originFolder);

                // console.log(originFolder);


                resizePath = path.join(lib.getApplicationDir(), global.hzConfig.resize, scale, originFolder, fileName);
                // console.log("resizePath  ===>"+resizePath);
            }
            
            originalPath = path.join(lib.getApplicationDir(), '/massage/uploads/', originFolder, fileName);
            // console.log("originalPath  ===>"+originalPath);
            var dimension = sizeOf(originalPath);
            // console.log("dimension  ===>"+dimension);
            originalHeight = dimension.height;
            originalWidth = dimension.width;

            //            console.log("step1 originalPath: >>>" + originalPath);
            // console.log("originalPath ===>"+originalPath);
            callback(null, originalPath, resizePath);
        },
        function (originalPath, resizePath, callback) {
            
            // console.log("call 2222");
            var scale_ = lib.getScale();
            arrFixSize = scale_.fixWidthScale;
            arrAspectRatio = scale_.aspectRatioScale;

            var isAspectRatioConsider = arrAspectRatio.indexOf(scale);
            var isFixSizeConsider = arrFixSize.indexOf(scale);
            if (isAspectRatioConsider > -1) {
                resizeOption = "aspectratio";
            } else if (isFixSizeConsider > -1) {
                resizeOption = "exact";
            }
            //            if (fakeFolder === "temp" || isFixSizeConsider > -1) {
            //                resizeOption = "exact";
            //            } else {
            //                resizeOption = "aspectratio";
            //            }
            if (fakeFolder === "temp" || isAspectRatioConsider > -1) {
                resizeOption = "aspectratio";
            } else {
                resizeOption = "exact";
            }
            //            console.log("resizeOption >> " + resizeOption);
            //            console.log("resizePath >> " + resizePath);
            if (!!resizeOption) {
                extension = path.extname(fileName).split(".")[1];
                switch (extension) {
                    case "jpg":
                    case "jpeg":
                        //console.log("jpg processing");
                        contentType = "image/jpg";
                        break;
                    case "png":
                        //console.log("png processing");
                        contentType = "image/png";
                        break;
                    case "gif":
                        //console.log("gif processing");
                        contentType = "image/gif";
                        break;
                    case "svg+xml":
                        //console.log("gif processing");
                        contentType = "image/svg+xml";
                        break;
                    case "svg":
                        //console.log("gif processing");
                        contentType = "image/svg";
                        break;
                }
                var objFile = lib.fileExists(originalPath);
                if (objFile === true) {
                    callback(null, resizeOption, originalPath, resizePath, contentType);
                } else {
                    // Track callback error response
                    callback("error in resizeImage() second callback()");
                }
            }
        },
        function (resizeOption, originalPath, resizePath, contentType, callback) {
            //  console.log("resizeOption  ==>"+resizeOption);
            //  console.log("originalPath  ==>"+originalPath);
            //  console.log("resizePath  ==>"+resizePath);
            //  console.log("contentType  ==>"+contentType);

             


            if (contentType === 'image/svg' || contentType === 'image/svg+xml') {
                //console.log(contentType);
                callback(null, originalPath, contentType);
            } else if (true === fs.existsSync(resizePath)) {
                callback(null, resizePath, contentType);
            } else {
                if ("exact" === resizeOption) {
                    gm(originalPath)
                        .thumbExact(resizeWidth, resizeHeight, resizePath,
                            function (err) {
                                if (!err) {
                                    callback(null, resizePath, contentType);
                                } else {
                                    callback("error in gm(originalPath).thumbExact(): " + err);
                                    logger.log("error", "method thumbExact(): " + err);
                                }
                            });
                } else {
                    //                    console.log("execute in else >>>>");
                    //                    console.log("resizeWidth:" + resizeWidth);
                    //                    console.log("resizeHeight:" + resizeHeight);
                    //                    console.log("originalHeight:" + originalHeight);
                    if (originalHeight > originalWidth) {
                        resizeWidth = resizeWidth / 2;
                        //                        console.log("new resizeWidth:" + resizeWidth);
                    }
                    gm(originalPath)
                        .resize(resizeWidth)
                        .noProfile()
                        .write(resizePath, function (err) {
                            if (!err) {
                                callback(null, resizePath, contentType);
                            } else {
                                callback("error method resize().noProfile().write(): " + err);
                                logger.log("error", "method resize().noProfile().write(): " + err);
                            }
                        });
                }
            }
        }
    ],
        function (err, resizePath, contentType) {
            //console.log(err);
            //console.log(resizePath);
            //console.log(contentType);
            var img = fs.readFileSync(resizePath);
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(img, 'binary');
        });
}

module.exports = {
    resizeImage: resizeImage
};