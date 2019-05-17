'use strict';

var AWS = require('aws-sdk');

module.exports.rupee = function(number) {
    return "Rs "+number;
};

module.exports.dollar = function(number) {
    return "$ "+number;
};

module.exports.euro = function(number) {
    return "E "+number;
};

module.exports.dinar = function(number) {
    return "D "+number;
};

module.exports.listbuckets = function() {
    return new AWS.S3({apiVersion: '2006-03-01'}).listBuckets().promise();
};