/*
 * @Author: user7
 * @Date:   2018-10-03 14:57:10
 * @Last Modified by:   user7
 * @Last Modified time: 2018-10-03 15:10:02
 * @Purpose : Common libraries used at server
 */
var logger = require("./database/config/log");
var path = require("path");
var fs = require("fs");
var im = require("imagemagick");
var gm = require("gm");
var sizeOf = require("image-size");
// include gulp
var gulp = require('gulp');
var gulpgm = require("gulp-gm");
//var lwip = require('lwip');
var mkdirp = require("mkdirp");
//require('../app/data/models/common');
/**
 * Verify directory exists or not
 * @param {string} aPath
 * @returns {Boolean}
 */
var isDirSync = function(aPath) {
    try {
        return fs.statSync(aPath).isDirectory();
    } catch (e) {
        if (e.code === 'ENOENT') {
            return false;
        } else {
            throw e;
        }
    }
};
/**
 * Verify file exists or not
 * @param {string} aPath
 * @returns {Boolean}
 */
function fileExists(filePath) {
    // console.log("filePath ===?"+filePath);
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

/**
 * Get file size
 * @param {string} aPath
 * @returns {Boolean}
 */
function getFileSize(filePath) {
    try {
        return fs.statSync(filePath).size;
    } catch (err) {
        return false;
    }
}

/**
 * Resolve directory issues of overwrite directory, if it already exists.
 * @param {string} directories
 * @returns {undefined}
 */
var resolveDirectoryIssue = function(directories) {
    if ("object" === typeof(directories)) {
        directories.forEach(function(directory) {
            var isDirSync_ = isDirSync(directory);
            if (false === isDirSync_) {
                createDirectory(directory);
            }
        });
    }
};
/**
 * Create new directory
 * @param {string} directory
 * @returns {undefined}
 */
var createDirectory = function(directory) {
    var opts = { mode: "0755" };
    mkdirp(directory, opts, function(err) {
        if (err) {
            logger.log("error", "method createDirectory() in lib.js: " + err);
        } else {
            logger.log("info", "Directory created:" + directory);
        }
    });
};
/**
 * Get application years to get data yearwise
 * @returns {undefined}
 */
var getApplicationYears = function() {
    logger.log("info", "chain method getApplicationYears() called");
    var arrAppYears_ = new Array();
    var date_ = new Date();
    var currentYear_ = date_.getFullYear();
    for (var loop_ = global.hzConfig.baseYear; loop_ <= currentYear_; loop_++) {
        arrAppYears_.push(loop_);
    }
    global.hzConfig.appYears = arrAppYears_;
};
/**
 * Get Application root directory path
 * @returns {string}
 */
var getApplicationDir = function() {
    return path.resolve(__dirname + "/../");
};
/**
 * Retrieve extensions lists
 * @returns {object}
 */
var getExtensionList = function() {
        return {
            "jpeg": "jpg",
            "jpg": "jpg",
            "png": "png",
            "gif": "gif"
        };
    }
    /**
     * Calculate image aspect ratio
     * @param {Number} srcWidth
     * @param {Number} srcHeight
     * @param {Number} maxWidth
     * @param {Number} maxHeight
     * @param {Boolean} keepAspectRatioForceFully
     * @return {Object}
     */
var calculateAspectRatioFit = function(srcWidth, srcHeight, maxWidth, maxHeight, keepAspectRatioForceFully) {
    var scaleParams = null,
        aspectRatioThumbSizes = null,
        fixedWidthThumbSizes = null,
        ratio = null;
    var indexOfAspectRatioThumbSizes = -1,
        indexOfFixedWidthThumbSizes = -1;
    aspectRatioThumbSizes = global.hzConfig.aspectRatioImageSizes.split(",");
    if (aspectRatioThumbSizes.length > 0) {
        scaleParams = maxWidth + "x" + maxHeight;
        indexOfAspectRatioThumbSizes = aspectRatioThumbSizes.indexOf(scaleParams);
    }

    fixedWidthThumbSizes = global.hzConfig.fixWidthImageSizes.split(",");
    if (fixedWidthThumbSizes.length > 0) {
        scaleParams = maxWidth + "x" + maxHeight;
        indexOfFixedWidthThumbSizes = fixedWidthThumbSizes.indexOf(scaleParams);
    }

    if (-1 !== indexOfFixedWidthThumbSizes && false === keepAspectRatioForceFully) {
        //            console.log("fixed width thum sizes");
        srcHeight = ((srcHeight * maxWidth) / srcWidth);
        //            console.log("source Heigth:" + srcHeight);
        return { width: maxWidth, height: (srcHeight < maxHeight) ? maxHeight : srcHeight, resizeExact: true, resizeScale: maxWidth + "x" + maxHeight };
    } else if (-1 !== indexOfAspectRatioThumbSizes || true === keepAspectRatioForceFully) {
        //            console.log("aspect ration thumb sizes");
        ratio = [maxWidth / srcWidth, maxHeight / srcHeight];
        ratio = Math.min(ratio[0], ratio[1]);
        return { width: srcWidth * ratio, height: srcHeight * ratio, resizeExact: false, resizeScale: maxWidth + "x" + maxHeight };
    } else {
        //            console.log("exact thumb sizes");
        return { width: maxWidth, height: maxHeight, resizeExact: true, resizeScale: maxWidth + "x" + maxHeight };
    }
};

var resizenew = function(width, height, abstractFolder, scale, filename, res) {
    var originalPath, resizePath, contentType;
    var folder = getOriginalFolderReference(abstractFolder);
    /*
     * Configure original and resize path
     */
    originalPath = path.join(getApplicationDir(), global.hzConfig.media, folder, filename);
    if ("auto" === scale) {
        resizePath = path.join(getApplicationDir(), global.hzConfig.temp, filename);
    } else {
        resizePath = path.join(getApplicationDir(), global.hzConfig.resize, scale, folder, filename);
    }

    getPixels(originalPath, function(err, pixels) {
            if (err) {
                logger.log("error", "method getPixels(): " + err);
                return false;
            }
            var originalWidth = pixels.shape[0];
            var originalHeight = pixels.shape[1];
            var originalChannel = pixels.shape[2];
            //var scalewithrepage = width + 'x' + height + '+0+0 +repage';
            var command = "convert " + originalPath + " -gravity center -resize 25% " + resizePath;
            //var command = 'convert ' + originalPath + ' -gravity center -resize ' + scalewithrepage + ' ' + resizePath;
            logger.log("log", "command: " + command);
            var child = exec(command, function(error, stdout, stderr) {
                var extension = path.extname(filename).split(".")[1];
                if (stderr) {
                    logger.log("error", "method child() > step 1: " + stderr);
                }
                if (stdout) {
                    logger.log("info", "method child() > step 2: " + stdout);
                }
                switch (extension) {
                    case "jpg" || "jpeg":
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
                }
                var img = fs.readFileSync(resizePath);
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(img, 'binary');
                if (error !== null) {
                    logger.log("error", "method child() > step 3:" + error);
                }
            });
        })
};
/**
 * Image cropping
 * @param {Number} width
 * @param {Number} height
 * @param {String} folder
 * @param {String} scale
 * @param {String} filename
 * @param {String} res
 * @returns {undefined}
 */
var crop = function(width, height, abstractFolder, scale, filename, res) {
    //        console.log('scale 2:"' + scale);
    var originalPath = null,
        resizePath = null;
    var folder = getOriginalFolderReference(abstractFolder);
    if (null === scale || undefined === scale || "" === scale) {
        resizePath = path.join(getApplicationDir(), global.hzConfig.temp, filename);
    } else {
        resizePath = path.join(getApplicationDir(), global.hzConfig.resize, scale, folder, filename);
    }
    originalPath = path.join(getApplicationDir(), global.hzConfig.media, folder, filename);
    //    im.crop({
    //        srcPath: originalPath,
    //        dstPath: resizePath,
    //        width: width,
    //        height: height,
    //        quality: 1,
    //        gravity: "Center"
    //    }, function (err, stdout, stderr) {
    //        //                console.log(">> errr");
    //        //                console.log(err);
    //        //                console.log(">> stdout");
    //        //                console.log(stdout);
    //        //                console.log(">> stderr");
    //        //                console.log(stderr);
    //        var img = fs.readFileSync(resizePath);
    //        res.writeHead(200, {'Content-Type': 'image/jpg'});
    //        res.end(img, 'binary');
    //    });
};
/**
 * Get scale object to resize image
 */
var getScale = function() {
    var originalScale = ['25x25', '45x45', '50x50', '70x18', '80x80', '90x90', '100x100', '130x130', '150x100', '150x150', '160x160', '200x200', '300x300', '350x350', '400x400', '500x500'];
    var fixWidthScale = ['720x400','215x215','210x133', '175x175', '165x165', '280x170', '160x160', '150x150', '131x131', '125x125', '122x122', '100x100', '100x50', '90x90', '90x64', '66x66', '60x60', '52x52', '45x45', '40x40', '35x35', '25x25', '27x14', '21x15', '20x20', '16x16'];
    var aspectRatioScale = ['800x550', '730x730', '597x309', '250x250', '220x125', '250x175', '219x176', '155x155', '140x140', '136x136', '120x120', '65x65', '50x50', '30x22'];

    return {
        originalScale: originalScale,
        fixWidthScale: fixWidthScale,
        aspectRatioScale: aspectRatioScale
    };
};
/**
 * Get media directories list
 */
var getMediaDirs = function() {
    return [
        // { dir: 'site', has_default_dir: 1 }, // store default global photos/video
        // { dir: 'group', has_default_dir: 1 }, // store group logos
        // { dir: 'conversation', has_default_dir: 1 }, // store conversation photos/videos
        // { dir: 'video', has_default_dir: 1 }, // store conversation photos/videos
        // { dir: 'home_video', has_default_dir: 0 }, // store home video
        // { dir: 'i18n', has_default_dir: 0 }, // store language images
        // { dir: 'country', has_default_dir: 0 }, // store country images
        // { dir: 'emoji', has_default_dir: 0 }, // store emojis images
        // { dir: 'awards', has_default_dir: 0 }, // store awards images
        // { dir: 'awards_category', has_default_dir: 0 }, // store awards images
        // { dir: 'event', has_default_dir: 1 }, // store event photos/videos
        // {dir: 'message', has_default_dir: 1}, // store event photos/videos
        // {dir: 'food', has_default_dir: 1}, // store event photos/videos
        {dir: 'images', has_default_dir: 1}, // store event photos/videos
        {dir: 'profile_images', has_default_dir: 1}, // store event photos/videos
        {dir: 'not_found_images', has_default_dir: 1}, // store event photos/videos
        
    ];
};
/**
 * It creates default physical directory structure
 * Retrieve folder wise directory and web path of all media directories.
 */
var generateMediaStructure = function() {

    var scale = getScale();
    var defaultDirs = ['photo', 'video'];
    var rootDirs = ['resize'];
    var media = getMediaDirs();
    var appDir = path.join("massage", "src", "assets");
    var arrDir = [];
    // console.log("media ==>");
    // console.log(media);

    // console.log("getApplicationDir() ====>?");
    // console.log(getApplicationDir());
    
    /*
     * Temporary Directory
     */
    var tempDir = path.join(getApplicationDir(), appDir);
    // console.log("tempDir ==>"+tempDir);

    //return false;
    arrDir.push(tempDir);
    for (var rootIndex = 0; rootIndex < rootDirs.length; rootIndex++) {
        var rootDir = path.join(rootDirs[rootIndex]);
        for (var index = 0; index < media.length; index++) {
            if ("media" === rootDir) {
                var mediaDir = media[index].dir;
                if (media[index].has_default_dir === 1) {
                    for (var subIndex = 0; subIndex < defaultDirs.length; subIndex++) {
                        var defaultDir = defaultDirs[subIndex];
                        var path_ = path.join(getApplicationDir(), appDir, rootDir, mediaDir, defaultDir);
                        arrDir.push(path_);
                        //                        console.log(index + ">>>" + path_);
                    }
                } else {
                    var path_ = path.join(getApplicationDir(), appDir, rootDir, mediaDir);
                    arrDir.push(path_);
                    //                    console.log(index + ">>>" + path_);
                }
            } else if ("resize" === rootDir) {
                var originalScale = scale.originalScale;
                for (var scaleIndex = 0; scaleIndex < originalScale.length; scaleIndex++) {
                    var mediaDir = media[index].dir;
                    if (media[index].has_default_dir === 1) {
                        for (var subIndex = 0; subIndex < defaultDirs.length; subIndex++) {
                            var defaultDir = defaultDirs[subIndex];
                            var path_ = path.join(getApplicationDir(), appDir, rootDir, originalScale[scaleIndex], mediaDir);
                            arrDir.push(path_);
                            //                            console.log(index + ">>>" + path_);
                        }
                    } else {
                        var path_ = path.join(getApplicationDir(), appDir, rootDir, originalScale[scaleIndex], mediaDir);
                        arrDir.push(path_);
                        //                        console.log(index + ">>>" + path_);
                    }
                }
            }
        }
    }
    //console.log(arrDir);
    resolveDirectoryIssue(arrDir);
};
/**
 * Generate web and directory path from file name
 * @param {string} folder
 * @param {string} file
 * @param {string} resIncludes [both|web|dir]
 * @returns {Array}
 */
var generatePathFromFile = function(folder, file, resIncludes) {
    //var file = file.replace("jpeg", "jpg");
    resIncludes = (null === resIncludes || undefined === resIncludes || "" === resIncludes) ? "all" : resIncludes;
    var mediaDirPath = path.join(getApplicationDir(), global.hzConfig.media);
    var resizeDirPath = path.join(getApplicationDir(), global.hzConfig.resize);
    var tempDirPath = path.join(getApplicationDir(), global.hzConfig.temp);
    //var arrDir = [mediaDirPath, resizeDirPath, tempDirPath];
    var arrDir = [];
    //var arrModule = ['photo', 'home_video', 'video'];
    //var scale = process.env['SCALE'].split(",");
    var scale = getScale();
    var originalScale = scale.originalScale;
    var len = originalScale.length;
    if (len > 0) {
        var folder_ = getOriginalFolderReference(folder);
        if ("dir" === resIncludes || "all" === resIncludes) {
            //            console.log("folder>" + folder_);
            arrDir["original_dir_path"] = path.join(mediaDirPath, folder_, file);
            arrDir["temp_dir_path"] = path.join(tempDirPath, file);
        }
        if ("web" === resIncludes || "all" === resIncludes) {
            arrDir["original_web_path"] = global.hzConfig.qualifiedHostName + path.join("media", folder, file);
        }
        originalScale.forEach(function(size) {
            var size = size.trim();
            var width = size.split("x")[0];
            var height = size.split("x")[1];
            //        console.log("width:>" + width);
            //        console.log("height:>" + height);
            dirResizeWithSize = path.join(resizeDirPath, size);
            //arrModule.forEach(function (folder) {
            if ("dir" === resIncludes || "all" === resIncludes) {
                //arrDir["resize_" + width + "_" + height + "_dir_path"] = path.join(dirResizeWithSize, folder, file);
                arrDir["resize_" + width + "_" + height + "_dir_path"] = path.join(resizeDirPath, size, folder_, file);
            }
            if ("web" === resIncludes || "all" === resIncludes) {
                arrDir["resize_" + width + "_" + height + "_web_path"] = global.hzConfig.qualifiedHostName + path.join('resize', size, folder, file);
                arrDir["temp_" + width + "_" + height + "_web_path"] = global.hzConfig.qualifiedHostName + path.join("temp", size, folder, file);
            }
            //}
        });
    }
    //
    //    console.log("<<<< <<<< <<<< <<<< <<<< <<<< <<<< <<<<");
    //    console.log(arrDir);
    //    console.log("<<<< <<<< <<<< <<<< <<<< <<<< <<<< <<<<");

    return arrDir;
};
/**
 * Retrieve original folder reference, when to call actual file from folder.
 */
var getOriginalFolderReference = function(folder) {
    if ("photo" === folder) {
        path_ = path.join("site", "photo");
    } else if ("i18n" === folder || "country" === folder || "emoji" === folder || "awards" === folder || "awards_category" === folder) {
        path_ = path.join(folder);
    } else {
        path_ = path.join(folder);
    }
    return path_;
};
/**
 * Get client directory path
 */
var getClientDir = function() {
    return path.join(getApplicationDir(), "app", "client");
};
/**
 * Get lists of default application generated album lists
 */
var getDefaultAlbums = function() {
    var albums = [
        //{album_name: 'my photos', is_app_generated: 1, is_publish: 0, is_visible: 1},
        { album_name: 'business photos', module: "photo", emoji: "57c5119e63b48ab9095ce68b", is_app_generated: 1, is_publish: 1, is_visible: 1, sort_order: 1 },
        { album_name: 'management photos', module: "photo", emoji: "5b447dd61084aa6977e702f8", is_app_generated: 1, is_publish: 1, is_visible: 1, sort_order: 1 },
        { album_name: 'visitors photos', module: "photo", emoji: "5af589a26067935cc547f81c", is_app_generated: 1, is_publish: 1, is_visible: 1, sort_order: 1 },
        { album_name: 'wall photos', module: "photo", emoji: "57c5115d63b48ab9095ce689", is_app_generated: 1, is_publish: 1, is_visible: 1, sort_order: 2 },
        { album_name: 'profile photos', module: "photo", emoji: "57c5118663b48ab9095ce68a", is_app_generated: 1, is_publish: 1, is_visible: 1, sort_order: 3 },
        { album_name: 'conversation photos', module: "group", emoji: "57c50fc763b48ab9095ce670", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 4 },
        { album_name: 'conversation videos', module: "group", emoji: "57c50fd463b48ab9095ce671", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 5 },
        { album_name: 'cover photos', module: "user", emoji: "57c5118663b48ab9095ce68a", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 6 },
        { album_name: 'business videos', module: "video", emoji: "597c29ec0c52c5a10ffd7e7f", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 7 },
        { album_name: 'management videos', module: "video", emoji: "5b4478cd85ce1c665a7de70a", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 7 },
        { album_name: 'visitors videos', module: "video", emoji: "5b447c9c1084aa6977e702f7", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 7 },
        { album_name: 'wall videos', module: "video", emoji: "597c29fc0c52c5a10ffd7e80", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 8 },
        { album_name: 'event photos', module: "event", emoji: "59957704f28c2c14baf8eeb3", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 5 },
        { album_name: 'event video', module: "event", emoji: "57c50fd463b48ab9095ce671", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 5 },
	    {album_name: 'document', module: "message", emoji: "59957704f28c2c14baf8eeb3", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 10},
        {album_name: 'chat videos', module: "message", emoji: "59957704f28c2c14baf8eeb3", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 11},
        {album_name: 'review photos', module: "business", emoji: "57c5115d63b48ab9095ce689", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 12 },
        {album_name: 'review videos', module: "business", emoji: "57c5115d63b48ab9095ce689", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 13 },
        { album_name: 'food photos', module: "food", emoji: "57c50fc763b48ab9095ce670", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 14 },
        {album_name: 'food videos', module: "food", emoji: "57c5115d63b48ab9095ce689", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 15 },
        {album_name: 'feed videos', module: "feed", emoji: "57c5115d63b48ab9095ce689", is_app_generated: 1, is_publish: 0, is_visible: 0, sort_order: 15 },

    ];
    return albums;
};
/*
 * Get directories from album name
 */
var getDefaultAlbumDirs = function() {
    var albums = [];
    // Photos
    //albums['my photos'] = path.join(getClientDir(), "media", "site", "photo");
    albums['business photos'] = path.join(getClientDir(), "media", "site", "photo");
    albums['management photos'] = path.join(getClientDir(), "media", "site", "photo");
    albums['visitors photos'] = path.join(getClientDir(), "media", "site", "photo");
    albums['wall photos'] = path.join(getClientDir(), "media", "site", "photo");
    albums['profile photos'] = path.join(getClientDir(), "media", "site", "photo");
    albums['cover photos'] = path.join(getClientDir(), "media", "site", "photo");
    albums['group logos'] = path.join(getClientDir(), "media", "group", "photo");
    albums['message logos'] = path.join(getClientDir(), "media", "message", "photo");
    albums['conversation photos'] = path.join(getClientDir(), "media", "site", "photo");
    albums['review photos'] = path.join(getClientDir(), "media", "site", "photo");
    // Videos
    albums['review videos'] = path.join(getClientDir(), "media", "video", "video");
    albums['conversation videos'] = path.join(getClientDir(), "media", "conversation", "video");
    albums['videos'] = path.join(getClientDir(), "media", "video", "video");
    albums['video photos'] = path.join(getClientDir(), "media", "video", "photo");
    albums['event photos'] = path.join(getClientDir(), "media", "event", "photo");
   // albums['event media'] = path.join(getClientDir(), "media", "event", "eventmedia", "photos");
    albums['event video'] = path.join(getClientDir(), "media", "event", "video");
    albums['document'] = path.join(getClientDir(), "media", "message", "photo");
    albums['chat videos'] = path.join(getClientDir(), "media", "message", "video");

    //Food
    albums['food photos'] = path.join(getClientDir(), "media", "site", "photo");
    albums['food videos'] = path.join(getClientDir(), "media", "video", "video");
    albums['feed videos'] = path.join(getClientDir(), "media", "video", "video");
    albums['feed photos'] = path.join(getClientDir(), "media", "site", "photo");
    return albums;
};

var getActivityTags = function() {
    return {
        'add_photo': 'add new photo(s)',
        'move_photo': 'move photo(s) to album',
        'delete_photo': 'delete photo(s)',
        'create_album': 'create new album',
        'edit_album': 'edit album details',
        'delete_album': 'delete album',
        'user_last_seen': "last seen",
        'user_visite_profile': "visite profile",
        'user_edit_profile': "edit profile",
        'user_edit_interest': "edit interest",
        'user_edit_company': "edit company",
        'user_edit_education': "edit education",
        'user_send_request_to_edit_primary_settings': "send request to edit primary settings",
        'user_edit_primary_settings': "edit primary settings",
        'user_reset_password': "reset password",
        'user_edit_regional_settings': "edit regional settings",
        'user_edit_notification_settings': "edit notification settings",
        'user_change_privacy': "change privacy settings",
        'user_close_account': "close account",
        'user_add_to_black_list': "add to black list",
        'user_remove_from_black_list': "remove from black list",
        'user_add_to_business_managenent': "add to employee list",
        'user_remove_from_business_managenent': "remove from employee list",
        'friend_send_friend_request': "send friend request",
        'friend_cancel_friend_request': "cancel friend request",
        'friend_accept_friend_request': "accept friend request",
        'friend_reject_friend_request': "reject friend request",
        'friend_unfriend_user': "remove from friend user",
        'friend_invite_user': "invite user(s)",
        'friend_create_list': "create list",
        'friend_edit_list': "edit list",
        'friend_remove_list': "remove list",
        'friend_suggest_friend': "suggest friend",
        'friend_ignore_suggest_friend': "ignore suggest friend",
        'auth_sign_in': "sign in",
        'auth_sign_in_facebook': "sign in facebook",
        'auth_log_out': "log out",
        'join_sucess': 'group join sucessfully',
        'join_pending': 'join group request sent',
        'left_group': 'group left',
        'group_created': 'group created',
        'group_updated': 'group updated',
        'group_invite_user': "invite user(s)",
        'conversation_created': 'conversation created',
        'conversation_updated': 'conversation updated',
        'conversation_deleted': 'conversation deleted',
        'request_accept': 'join group request accept',
        'request_reject': 'join group request reject',
        'request_block': 'join group request block',
        'reject_member': 'reject member fron the group',
        'block_member': 'block member fron the group',
        'unblock_member': 'unlock member fron the group',
        'block_for_48_hours': 'after reject member send group join request before 48 hours',
        'announcement_send': 'sent announcement',
        'change_group_delete': 'delete group',
        'change_group_logo': 'group logo change',
        'change_group_mode_secret': 'set group mode secret',
        'change_group_mode_private': 'set group mode private',
        'change_group_mode_public': 'set group mode public',
        'change_group_activeinactive': 'set group mode active-inactive',
        'change_group_language': 'group langauge change',
        'change_group_name': 'group name change',
        'former_member_message': 'sent message to former member',
        'delete_former_member': 'delete former member from group',
        'reply_report_reject': 'reject reported reply',
        'comment_report_reject': 'reject reported comment',
        'conversation_report_reject': 'reject reported conversation',
        'reply_report_delete': 'delete reported reply',
        'comment_report_delete': 'delete reported comment',
        'conversation_report_delete': 'delete reported conversation',
        'reply_report_message_by_member': 'reply report send',
        'comment_report_message_by_member': 'comment report send',
        'conversation_report_message_by_member': 'conversation report send',
        'leave_notice': 'leave notice',
        'cancel_leave_notice': 'cancel leave notice',
        'cancel_request': 'cancel group request',
        'video_subscribe_notification': 'video subscribe notification',
        //'':'',
    };
};

var reduceFileSize = function(source, destination, cb) {
    var stream = gulp.src(source)
        .pipe(gulpgm(function(gmFile) {
            return gmFile.minify();
        }))
        .pipe(gulp.dest(destination));
    stream.on("end", function() {
        cb();
    });
    stream.on("error", function(err) {
        cb(err);
    });
    // gulp.src(source)
    //     .pipe(gulpgm(function(gmFile) {
    //         return gmFile.minify();
    //     }))
    //     .pipe(gulp.dest(destination));
    // cb();
    // .end(function() {
    //     if (cb !== undefined) {
    //         cb();
    //     }
    // });
};

/**
*this is use for remove bellow glogal varible when some issue arise and in some cases this will not removed, this variable will automatically remove after some time
*/
var removeFileUploadVar =  function(params) {
    if(!!params){
        var delayTime = 0;
        if(params.delay === 'less'){
            delayTime = 3000;
        }else if(params.delay === 'more'){
            delayTime = 60000*60;
        }
        setTimeout(function(){
            if(global.manageFileUploadArr[params.photoUniqueProcess] !== undefined){
                delete global.manageFileUploadArr[params.photoUniqueProcess];
            }
        }, delayTime);
    }
};

/**
 * @description Common methods called at server
 */
var methods = {
    // Verify directory exists or not, depedent method of resolveDirecotryIssue
    isDirSync: isDirSync,
    // Verify that file exists or not and return flag if not exists
    fileExists: fileExists,
    //get file size
    getFileSize: getFileSize,
    // Create directory dependent method of resolveDirectoryIssue
    createDirectory: createDirectory,
    // Create directory if not exists
    resolveDirectoryIssue: resolveDirectoryIssue,
    // Calculate aspect ratio dependent method of resize
    calculateAspectRatioFit: calculateAspectRatioFit,
    // resize image
    resizenew: resizenew,
    // Calculate application base year to current year and retrieve array of years
    getApplicationYears: getApplicationYears,
    // Get Application directory list
    getApplicationDir: getApplicationDir,
    // Get Extension lists
    getExtensionList: getExtensionList,
    // Crop image
    crop: crop,
    // Get media directories list dependent method of generateMediaStructure
    getMediaDirs: getMediaDirs,
    // Generate default media structure
    generateMediaStructure: generateMediaStructure,
    // Get scale list
    getScale: getScale,
    // Get client directory path
    getClientDir: getClientDir,
    // Generate path from file name
    generatePathFromFile: generatePathFromFile,
    // Get original folder reference
    getOriginalFolderReference: getOriginalFolderReference,
    // Get application generated album list
    getDefaultAlbums: getDefaultAlbums,
    // Get default album directories
    getDefaultAlbumDirs: getDefaultAlbumDirs,
    // Get activity tags
    getActivityTags: getActivityTags,
    reduceFileSize: reduceFileSize,
    removeFileUploadVar : removeFileUploadVar
};
module.exports = methods;