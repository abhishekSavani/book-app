var express = require('express'),
    router = express.Router(),
    Class = require('../models/class');

router.post('/adminapi/class/add', function (req, res, next) {
    // console.log("reee", req.body);
    var obj = req.body;
    Class.create(obj, function (err, post) {
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

router.get('/adminapi/class/getclasses', function (req, res) {
    Class
        .find()
        .exec(function (err, classdata) {
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
                    data: classdata
                });
            }
        });
});

router.get('/adminapi/class/getoneclass/:id', function (req, res) {
    Class
        .findById({'_id': req.params.id})
        .exec(function (err, classdata) {
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
                    data: classdata
                });
            }
        });
});

router.put('/adminapi/class/update/:id', function (req, res) {
    // console.log("ertdr", req.body);
    var obj = req.body;
    Class.findByIdAndUpdate({ '_id': req.params.id }, obj, function (err2, hasresult) {
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

router.delete('/adminapi/class/delete/:id', function (req, res) {
    Class.findByIdAndRemove({ '_id': req.params.id }, function (err, post) {
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

module.exports = router;