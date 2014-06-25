'use strict';

var request = require('request');
var sanitize = require('validator');

// Your apps token, can be obtained from: https://developers.facebook.com/tools/accesstoken/
// (After you have setup your app in your Facebook developer account)
var APP_TOKEN = 'your-app-token-goes-here';

var FB_URL = 'https://graph.facebook.com/debug_token';

exports.validateUserAccessTokenAndId = function(userAccessToken, userId, cb) {
    var url = FB_URL + '?input_token=' + sanitize.escape(userAccessToken) + '&access_token=' + APP_TOKEN;
    request({url: url, json: true}, function (error, response, body) {
        if (error) {
            cb(error);
        }

        if (!body) {
            return cb(null, false);
        }

        if (!error && response.statusCode === 200) {
            return cb(null, body.data['is_valid'] && body.data['user_id'] === sanitize.escape(userId));
        }
    });
};
