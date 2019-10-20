'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var SubjectSchema = new Schema({
    book_name: {
        type: String
    },
    book_price: {
        type: String
    },
    book_quantity: {
        type: String
    },
    book_points: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}, { collection: 'subject' });

module.exports = mongoose.model("Subject", SubjectSchema);
