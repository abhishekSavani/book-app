var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken");

var userSchema = new Schema({
    //  _Id: objectId,
    // profile_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user_detail',
    //     index: true
    // },
    // profile_image: {
    //     type: String,
    // },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    username: {
        type: String,
    },
    full_name: {
        type: String,
    },
    mobile_number: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    class: {
        type: Number
    },
    user_type: {
        type: Number, // 1: SuperAdmin, 2: School, 3: Student
    },
    is_active: {
        type: Number, // -1: pending to activation, 0: inactive, 1: active
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    }, // Registration date
    updated_at: {
        type: Date, // Registration activation date / user update date
        default: Date.now
    }
}, { collection: 'user' });

/**
 *Validations
 */
userSchema.path('class').required(true, 'Class is required.');
userSchema.path('username').required(true, 'Email is required.');
userSchema.path('mobile_number').required(true, 'Mobile Number is required.');
userSchema.path('password').required(true, 'Password is required.');
userSchema.path('user_type').required(true, 'User Type is required.');
userSchema.path('is_active').required(true, 'is active is required.');
// userSchema.path('is_close').required(true, 'is close is required.');

userSchema.path('email').validate(function (value, done) {
    if (this.isModified('email')) {
        this.model('User').count({ email: value }, function (err, count) {
            if (err)
                return done(err);
            // If `count` is greater than zero, "invalidate"
            // done(!count);
        });
    } else {
        done(1);
    }
}, 'Email already exists');

/**
 *Methods
 */
userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err)
            return callback(err);
        callback(null, isMatch);
    });
};

userSchema.methods.comparePasswordOther = function (candidatePassword, hashPassword, callback) {
    bcrypt.compare(candidatePassword, hashPassword, function (err, isMatch) {
        if (err)
            return callback(err);
        callback(null, isMatch);
    });
};

userSchema.methods.checkEmail = function (callback) {
    return this.model('User').count({ email: this.email }, callback);
};

userSchema.methods.generateJWT = function (user) {
    return jwt.sign({user}, global.hzConfig.jwtPrivateKey, {
            expiresIn: '1d' //365 days
        });
};

userSchema.methods.setPassword = function (user, password, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            user.set({ password: hash });
            callback();
        });
    });
};

var User = module.exports = mongoose.model("User", userSchema);

userSchema.methods.validateEmailOrNickname = function (username, callback) {
    var orCondition = [{full_name: username}, {mobile_number: username}];
    //return this.model("user").findOne().or(orCondition);
    return this.model("User").find({$or: orCondition}, callback);
};