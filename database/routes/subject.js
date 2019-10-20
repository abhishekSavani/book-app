var express = require('express'),
    router = express.Router(),
    Subject = require('../models/subject');

router.post('/adminapi/subject/add', function (req, res, next) {
    // console.log("reee", req.body);
    var obj = req.body;
    Subject.create(obj, function (err, post) {
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

router.get('/adminapi/subject/getsubjects', function (req, res) {
    Subject
        .find()
        .exec(function (err, subjectdata) {
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
                    data: subjectdata
                });
            }
        });
});

router.get('/adminapi/subject/getonesubject/:id', function (req, res) {
    Subject
        .findById({'_id': req.params.id})
        .exec(function (err, subjectdata) {
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
                    data: subjectdata
                });
            }
        });
});

router.put('/adminapi/subject/update/:id', function (req, res) {
    // console.log("ertdr", req.body);
    var obj = req.body;
    Subject.findByIdAndUpdate({ '_id': req.params.id }, obj, function (err2, hasresult) {
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

router.delete('/adminapi/subject/delete/:id', function (req, res) {
    Subject.findByIdAndRemove({ '_id': req.params.id }, function (err, post) {
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

router.post('/adminapi/subject/getsubjectlist', function (req, res) {
    // console.log("req===>", req.body);
    Subject
        .find({ class_id: { $in: req.body } })
        .populate([{
            path: 'class_id',
            model: 'Class'
        }])
        .exec(function (err, subjectlistdata) {
            if (err) {
                res.status(500).json({
                    status: 0,
                    code: 500,
                    type: "error",
                    message: 'No Records Found',
                    data: err
                });
            } else {
                // console.log("subjectlistdata==>", subjectlistdata);
                res.status(200).json({
                    status: 1,
                    code: 200,
                    type: "success",
                    message: 'Record Found',
                    data: subjectlistdata
                });
            }
        });
})

module.exports = router;