var winston = require('winston');
var date = new Date();
var logFileName = date.getFullYear() + "_" + (parseInt(date.getMonth()) + 1) + "_" + date.getDate();
var logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            timestamp: function () {
                var d = new Date();
                return d.toString();
            },
            formatter: function (options) {
                // Return string will be passed to logger.
                var output = '[' + options.timestamp() + '] - [' + options.level.toUpperCase() + '] - ' + (undefined !== options.message ? options.message : '');
                return output;
            },
            prettyPrint: function (object) {
                return JSON.stringify(object);
            },
            level: 'info',
            name: 'info-file',
            filename: './logs/' + logFileName + '_info_logs.log',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: false,
            maxsize: 5242880, //5MB
            //maxFiles: 5,
            colorize: true
        }),
        new winston.transports.File({
            timestamp: function () {
                var d = new Date();
                return d.toString();
            },
            formatter: function (options) {
                // Return string will be passed to logger.
                var output = '[' + options.timestamp() + '] - [' + options.level.toUpperCase() + '] - ' + (undefined !== options.message ? options.message : '');
                return output;
            },
            level: 'error',
            name: 'error-file',
            filename: './logs/' + logFileName + '_error_logs.log',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: false,
            prettyPrint: function (object) {
                return JSON.stringify(object);
            },
            maxsize: 5242880, //5MB
            //maxFiles: 5,
            colorize: true
        }),
        new winston.transports.Console({
            level: 'debug',
            name: 'debug-file',
            filename: './logs/' + logFileName + '_debug_logs.log',
            handleExceptions: true,
            json: false,
            colorize: true,
            prettyPrint: function (object) {
                return JSON.stringify(object);
            }
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({filename: './logs/' + logFileName + '_exceptions.log'})
    ],
    exitOnError: false,
});
module.exports = logger;
module.exports.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};