var express = require('express'),
    router = express.Router(),
    _ = require('lodash'),
    AssignSchool = require('../models/assign_school');

router.post('/adminapi/assignschool/add', function (req, res, next) {
    // console.log("reee", req.body);
    var obj = req.body;
    AssignSchool.create(obj, function (err, post) {
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

router.get('/adminapi/assignschool/getassignschools', function (req, res) {
    AssignSchool
        .find()
        .populate([
            {
                path: 'school_id',
                model: 'School'
            },
            {
                path: 'class_id',
                model: 'Class'
            },
            {
                path: 'book_id',
                model: 'Subject'
            }
        ])
        .exec(function (err, assignschooldata) {
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
                    data: assignschooldata
                });
            }
        });
});

router.get('/adminapi/assignschool/getoneassignschool/:id', function (req, res) {
    AssignSchool
        .findById({'_id': req.params.id})
        .exec(function (err, assignschooldata) {
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
                    data: assignschooldata
                });
            }
        });
});

router.put('/adminapi/assignschool/update/:id', function (req, res) {
    // console.log("ertdr", req.body);
    var obj = req.body;
    AssignSchool.findByIdAndUpdate({ '_id': req.params.id }, obj, function (err2, hasresult) {
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

router.delete('/adminapi/assignschool/delete/:id', function (req, res) {
    AssignSchool.findByIdAndRemove({ '_id': req.params.id }, function (err, post) {
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

router.post('/api/assignschool/getAllClass', function (req, res) {
    // console.log("ress111", req.body);
        AssignSchool
        .find({'school_id': req.body.schoolid })
        .populate([
            {
                path: 'school_id',
                model: 'School'
            },
            {
                path: 'class_id',
                model: 'Class'
            }
        ])
        .exec(function (err1, classdata) {
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
                var newdata = _.uniqBy(classdata, 'class_id');
                res.status(200).json({
                    status: 1,
                    code: 200,
                    type: "success",
                    message: 'Record Found!!',
                    data: newdata
                });
            }
        })
});

router.post('/api/assignschool/getAllSubjects', function (req, res) {
    // console.log("ress111", req.body);
        AssignSchool
        .find({'class_id': req.body.classid })
        .populate([
            {
                path: 'school_id',
                model: 'School'
            },
            {
                path: 'class_id',
                model: 'Class'
            },
            {
                path: 'book_id',
                model: 'Subject'
            }
        ])
        .exec(function (err1, bookdata) {
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
                // var newdata = _.uniqBy(classdata, 'class_id');
                res.status(200).json({
                    status: 1,
                    code: 200,
                    type: "success",
                    message: 'Record Found!!',
                    data: bookdata
                });
            }
        })
});

module.exports = router;