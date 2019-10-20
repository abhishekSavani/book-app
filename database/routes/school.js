var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    NodeGeocoder = require('node-geocoder'),
    options = {
        provider: 'google',
       
        // Optional depending on the providers
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyDewtIqDmNYgWkfl8_LB04M0cyU2UHdDOg', // for Mapquest, OpenCage, Google Premier
        formatter: null         // 'gpx', 'string', ...
    },
    geocoder = NodeGeocoder(options),
    School = require('../models/school');

var multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/school_images/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        var ext = file.originalname.split('.').pop();
        cb(null, datetimestamp + '.' + ext);
    }
});
    
let upload = multer({ storage: storage });

router.post('/adminapi/school/add', upload.single('school_logo'), function (req, res, next) {
    // console.log("reee", req.body);
    var obj = req.body;
    obj.school_logo = req.file.filename;
    School.create(obj, function (err, post) {
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

router.get('/adminapi/school/getschools', function (req, res) {
    School
        .find()
        .populate([{
            path: 'class_id',
            model: 'Class'
        }])
        .exec(function (err, schooldata) {
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
                    data: schooldata
                });
            }
        });
});

router.get('/adminapi/school/getoneschool/:id', function (req, res) {
    School
        .findById({'_id': req.params.id})
        .exec(function (err, schooldata) {
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
                    data: schooldata
                });
            }
        });
});

router.put('/adminapi/school/update/:id', upload.single('school_logo'), function (req, res) {
    // console.log("ertdr", req.body);
    var obj = req.body;
    if (req.file != undefined) {
        obj.school_logo = req.file.filename;
        // obj.profile_image = req.file.filename;
        fs.exists('./uploads/school_images/' + obj.school_logo_old, function (exists) {
            if (exists) {
                // console.log('exists', exists);
                fs.unlinkSync('./uploads/school_images/' + obj.school_logo_old, function (res) {
                    if (res) {
                        console.log('exists', exists);
                    }
                })
            }
        });
    } else {
        obj.school_logo = obj.school_logo_old;
    }
    School.findByIdAndUpdate({ '_id': req.body.id }, obj, function (err2, hasresult) {
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

router.delete('/adminapi/school/delete/:id', function (req, res) {
    School.findByIdAndRemove({ '_id': req.params.id }, function (err, post) {
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

router.post('/api/school/getLatlongFromAddress', function (req, res) {
    console.log("ress", req.body);
    console.log("geocoder", geocoder);
    if(!!req.body.longitude && !!req.body.latitude){
        var long = req.body.longitude;
        var lat = req.body.latitude;
        geocoder.geocode('29 champs elysée paris', function(err, latlongdata) {
            console.log("ewrwerwere", latlongdata);
            console.log("err", err);
            return false;
            if (err) {
                res.status(500).json({
                    status: 0,
                    code: 500,
                    type: "error",
                    message: 'Record Not Found',
                    data: err
                });
            } else {
                var search = latlongdata.display_name;
                School
                .find({'address': { $regex: search }})
                .exec(function (err1, schooldata) {
                    // console.log("ress111", res);
                    if (err1) {
                        res.status(500).json({
                            status: 0,
                            code: 500,
                            type: "error",
                            message: 'Record Not Found',
                            data: err1
                        });
                    } else {
                        res.status(200).json({
                            status: 1,
                            code: 200,
                            type: "success",
                            message: 'Record Found!!',
                            data: schooldata
                        });
                    }
                })
            }
        })
    } else {
        res.status(500).json({
            status: 0,
            code: 500,
            type: "error",
            message: 'Error while getting the records'
        });
    }
});

router.post('/api/school/getLatlongFromAddressSearch', function (req, res) {
    // console.log("ress111", req.body);
    if(!!req.body.search){
        var search = req.body.search;
        School
        .find({'address': { $regex: search }})
        .exec(function (err1, schooldata) {
            // console.log("ress111", res);
            if (err1) {
                res.status(500).json({
                    status: 0,
                    code: 500,
                    type: "error",
                    message: 'Record Not Found',
                    data: err1
                });
            } else {
                res.status(200).json({
                    status: 1,
                    code: 200,
                    type: "success",
                    message: 'Record Found!!',
                    data: schooldata
                });
            }
        })
    } else {
        res.status(500).json({
            status: 0,
            code: 500,
            type: "error",
            message: 'Error while getting the records'
        });
    }
});

module.exports = router;