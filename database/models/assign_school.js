'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var AssignSchoolSchema = new Schema({
    school_id: {
        type: Schema.Types.ObjectId,
        ref: 'school',
    },
    class_id: {
        type: Schema.Types.ObjectId,
        ref: 'class',
    },
    book_id: {
        type: Schema.Types.ObjectId,
        ref: 'subject',
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}, { collection: 'assign_school' });

module.exports = mongoose.model("Assign School", AssignSchoolSchema);
