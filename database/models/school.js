'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var SchoolSchema = new Schema({
    school_name: {
        type: String
    },
    school_mobile_number: {
        type: String
    },
    address: {
        type: String
    },
    pincode: {
        type: String
    },
    school_logo: {
        type: String
    },
    rewards_type: {
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
}, { collection: 'school' });

module.exports = mongoose.model("School", SchoolSchema);
