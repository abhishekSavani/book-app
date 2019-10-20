'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ClassSchema = new Schema({
    class_name: {
        type: String
    },
    is_active: {
        type: Number, // 0: inactive, 1: active,
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}, { collection: 'class' });

module.exports = mongoose.model("Class", ClassSchema);