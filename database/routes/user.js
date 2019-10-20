var logger = require("./../config/log"),
    express = require('express'),
    router = express.Router(),
    User = require('../models/user'),
    School = require('../models/school'),
    AssignSchool = require('../models/assign_school'),
    passport = require("passport"),
    //passportoauth = require('passport-oauth'),
    bcrypt = require("bcryptjs"),
    atob = require('atob'),
    fs = require('fs'),
    async = require('async'),
    _ = require('lodash'),
    localStrategy = require("passport-local"), Startegy;

var multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profile_images/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        var ext = file.originalname.split('.').pop();
        cb(null, datetimestamp + '.' + ext);
    }
});

let upload = multer({ storage: storage });

/**
 * User athentication via signin
 */
router
    .route('/api/user/login')
    .post(
        function (req, res) {
            passport.authenticate('user-local', function (err, user, info) {
                if (err) {
                    // console.log("errr", err);
                    return res.json({
                        status: 0,
                        code: 401,
                        type: "error",
                        message: err
                    });
                } else if (!user) {
                    // console.log("info", info);
                    //console.log("not user:");
                    //console.log(user);
                    return res.json({
                        status: 0,
                        code: 401,
                        type: "error",
                        message: info
                    });
                } else {
                    // console.log("user>>>>>>>>>>user");
                    // console.log(user);
                    req.login(user, {}, function (err) {
                        if (err) {
                            // console.log("err", err);
                            return res.status(500).json({
                                status: 0,
                                code: 500,
                                type: "other",
                                err: 'could not login user'
                            });
                        } else {
                            // logger.log("info", user._id + ' user logged in');
                            // console.log(JSON.parse(JSON.stringify(user)));
                            // var userjson = JSON.parse(JSON.stringify(user));
                            var _res = user.generateJWT(user);
                            User
                                // .findByIdAndUpdate({ '_id': user._id }, { 'is_online': 1 }, function (req, userdata) {
                                    res.cookie('myapp-token', _res, {
                                        maxAge: global.hzConfig.jwtTimeOut,
                                        httpOnly: false
                                    });
                                    res.status(200).json({
                                        status: 1,
                                        type: "success",
                                        message: 'login successful',
                                        res: {
                                            upid: user._id,
                                            usertype: user.user_type,
                                            username: user.username
                                        },
                                        token: _res
                                    });
                                // })
                        }
                    });
                }
            })(req, res);
        });

router
    .route('/adminapi/user/login')
    .post(
        function (req, res) {
            // console.log("rer", res);
            // return false;
            passport.authenticate('user-local-admin', function (err, user, info) {
                if (err) {
                    return res.json({
                        status: 0,
                        code: 401,
                        type: "error",
                        message: err
                    });
                } else if (!user) {
                    //console.log("not user:");
                    //console.log(user);
                    return res.json({
                        status: 0,
                        code: 401,
                        type: "error",
                        message: info
                    });
                } else {
                    // console.log("user>>>>>>>>>>user");
                    // console.log(user);
                    req.login(user, {}, function (err) {
                        if (err) {
                            // console.log("err", err);
                            return res.status(500).json({
                                status: 0,
                                code: 500,
                                type: "other",
                                err: 'could not login user'
                            });
                        } else {
                            // logger.log("info", user._id + ' user logged in');
                            // console.log(JSON.parse(JSON.stringify(user)));
                            // var userjson = JSON.parse(JSON.stringify(user));
                            var _res = user.generateJWT(user);
                            res.cookie('myapp-token-admin', _res, {
                                maxAge: global.hzConfig.jwtTimeOut,
                                httpOnly: false
                            });
                            res.status(200).json({
                                status: 1,
                                type: "success",
                                message: 'login successful',
                                res: {
                                    upid: user._id,
                                    usertype: user.user_type,
                                    username: user.username
                                }
                            });
                        }
                    });
                }
            })(req, res);
        });
/*
 * For user log out
 */
router
    .route("/api/user/logout")
    .post(
        function (req, res) {
            // console.log("ree", req);
            // console.log("sgfs", res);
            // return false;
            // User
            //     .findByIdAndUpdate({ '_id': req.payload.id }, { 'is_online': 0 }, function (req, userdata) {
            //         // logger.log("info", req.payload.id + " user log out.");
            //     })
            res.clearCookie('myapp-token');
            req.logout();
            res.json({
                status: 1,
                code: 200,
                type: "success",
                message: "Session windup."
            });
        });

router
    .route("/adminapi/user/logout")
    .post(
        function (req, res) {
            // console.log("ree", req);
            // console.log("sgfs", res);
            // return false;
            // logger.log("info", req.payload.id + " user log out.");
            res.clearCookie('myapp-token-admin');
            req.logout();
            res.json({
                status: 1,
                code: 200,
                type: "success",
                message: "Session windup."
            });
        });


/**
 * Serialize user for passport authentication
 */
passport.serializeUser(function (user, done) {
    //console.log("serialize:>>"+user.id);
    //console.log(user);
    done(null, user.id);
});
/**
 * Deserialize user for passport authentication
 */
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        //console.log("deserialize:>>"+user.id);
        done(err, user);
    });
});
/**
 * Passport local authentication policy to validate email/username and passport
 * For local authentication
 */
passport.use('user-local', new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
    function (username, password, done) {
        var condition = {};
        condition.is_active = 1;
        condition['$or'] = [];
        condition['$or'].push({ username: username }, { mobile_number: username });

        User.findOne(condition,
            'username email password mobile_number user_type is_active',
            function (err, user) {
                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect username.'
                    });
                }

                user.comparePassword(password, function (err, isMatch) {
                    if (err)
                        throw err;
                    if (!isMatch) {
                        return done(null, false, {
                            message: 'Incorrect password.'
                        });
                    }
                    return done(null, user);
                });
            });
    }
));

passport.use('user-local-admin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (username, password, done) {
        var condition = {};
        condition.is_active = 1;
        condition.is_close = 0;
        condition.user_type = 1;
        condition['$or'] = [];
        condition['$or'].push({ full_name: username }, { mobile_number: username });

        User.findOne(condition,
            'profile_id username email password user_type is_active',
            function (err, user) {
                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect username.'
                    });
                }

                user.comparePassword(password, function (err, isMatch) {
                    if (err)
                        throw err;
                    if (!isMatch) {
                        return done(null, false, {
                            message: 'Incorrect password.'
                        });
                    }
                    return done(null, user);
                });
            });
    }
));


// Add user
router.post('/api/user/register', function (req, res, next) {
    // console.log("reqq", req.body);
    var obj = req.body;
    if (req.body.password !== req.body.confirmpassword) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);
    }
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    obj.password = hash;
    User.create(obj, function (err, post) {
        if (err) {
            res.status(500).json({
                status: 0,
                code: 500,
                type: "error",
                message: 'Not Inserted',
                data: err
            });
        } else {
            res.status(200).json({
                status: 1,
                code: 200,
                type: "success",
                message: 'Record Inserted',
                data: post
            });
        }
    });
});

//Get list of User
router.get('/api/user/list', function (req, res) {
    User.find().exec(function (err, products) {
        if (err) {
            res.status(500).json({
                status: 0,
                code: 500,
                type: "error",
                message: 'No Records Found',
                data: err
            });
        } else {
            res.status(200).json({
                status: 1,
                code: 200,
                type: "success",
                message: 'Record Found',
                data: products
            });
        }
    });
});

//getone user while updating
router.get('/api/user/getone/:id', function (req, res, next) {
    User.findById({ '_id': req.params.id }, function (err, post) {
        if (err) {
            res.status(500).json({
                status: 0,
                code: 500,
                type: "error",
                message: 'Error while getting records',
                data: err
            });
        } else {
            // post.password = atob(post.password);
            res.status(200).json({
                status: 1,
                code: 200,
                type: "success",
                message: 'Record Found',
                data: post
            });
        }
    });
});

// Delete User
router.delete('/api/user/delete/:id', function (req, res) {
    User.findByIdAndRemove({ '_id': req.params.id }, function (err, post) {
        if (err) {
            res.status(500).json({
                status: 0,
                code: 500,
                type: "error",
                message: 'Records Not Deleted',
                data: err
            });
        } else {
            res.status(200).json({
                status: 1,
                code: 200,
                type: "success",
                message: 'Record Deleted',
                data: post
            });
        }
    });
});

router.post('/api/user/checkcurrentpassword', function (req, res) {
    User.findOne({ 'username': req.body.username, 'is_active': 1 }, function (err, post) {
        if (err) {
            res.status(500).json({
                status: 0,
                code: 500,
                type: "error",
                message: 'Record not Found',
                data: err
            });
        } else {
            // console.log("dddd", post._doc);
            var hash = post._doc['password'];
            bcrypt.compare(req.body.cpassword, hash, function (err1, result) {
                if (err1) {
                    res.status(500).json({
                        status: 0,
                        code: 500,
                        type: "error",
                        message: 'Password does not match',
                        data: err1
                    });
                } else {
                    res.status(200).json({
                        status: 1,
                        code: 200,
                        type: "success",
                        message: 'Password Match',
                        data: result
                    });
                }
            });
        }
    });
});

router.put('/api/user/updateUser/:id', upload.single('profile_image'), function (req, res) {
    // console.log("ree", req.body);
    // console.log("ree", req.file.filename);

    // return false;
    var obj = req.body;
    // obj.profile_image = req.file.filename;
    if (req.file != undefined) {
        obj.profile_image = req.file.filename;
        // obj.profile_image = req.file.filename;
        fs.exists('./uploads/profile_images/' + obj.profile_image_old, function (exists) {
            if (exists) {
                // console.log('exists', exists);
                fs.unlinkSync('./uploads/profile_images/' + obj.profile_image_old, function (res) {
                    if (res) {
                        console.log('exists', exists);
                    }
                })
            }
        });
    }
    User.findByIdAndUpdate({ '_id': req.body.id }, obj, function (err2, hasresult) {
        if (err2) {
            res.status(500).json({
                status: 0,
                code: 500,
                type: "error",
                message: 'Record not updated',
                data: err2
            });
        } else {
            // console.log("dfdff", hasresult);
            res.status(200).json({
                status: 1,
                code: 200,
                type: "success",
                message: 'Record Updated!!',
                data: hasresult
            });
        }
    })
});

router.put('/api/user/changepassword/:id', function (req, res) {
    console.log("req", req.body);
    console.log("req1111", req.params);
    var obj = req.body;
    User.findById({ '_id': req.params.id }, function (err, post) {
        if (err) {
            res.status(500).json({
                status: 0,
                code: 500,
                type: "error",
                message: 'ID not Found',
                data: err
            });
        } else {
            var hash = post.password;
            bcrypt.compare(req.body.cpassword, hash, function (err1, result) {
                if (err1) {
                    res.status(500).json({
                        status: 0,
                        code: 500,
                        type: "error",
                        message: 'Password does not match',
                        data: err1
                    });
                } else {
                    if (req.body.npassword != '') {
                        var salt = bcrypt.genSaltSync(10);
                        var hash1 = bcrypt.hashSync(req.body.npassword, salt);
                        obj.password = hash1;
                    } else {
                        obj.password = hash;
                    }
                    User.findByIdAndUpdate({ '_id': req.params.id }, obj, function (err2, hasresult) {
                        if (err2) {
                            res.status(500).json({
                                status: 0,
                                code: 500,
                                type: "error",
                                message: 'Error while updating the password',
                                data: err2
                            });
                        } else {
                            // console.log("dfdff", hasresult);
                            res.status(200).json({
                                status: 1,
                                code: 200,
                                type: "success",
                                message: 'Password updated successfully!!',
                                data: hasresult
                            });
                        }
                    })
                }
            })
        }
    })
});

module.exports = router;