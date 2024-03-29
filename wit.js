var https = require('https');
var Future = require('futures').future;

var request_wit = function(user_text) {
    var future = Future.create();
    var options = {
        host: 'api.wit.ai',
        path: '/message?q=' + encodeURIComponent(user_text),
        // the Authorization header allows you to access your Wit.AI account
        // make sure to replace it with your own
        headers: {'Authorization': 'Bearer 6UZHE2ICMPY7JT4YV2DZPAZFILAUYLNS'}
    };

    https.request(options, function(res) {
        var response = '';

        res.on('data', function (chunk) {
            response += chunk;
        });

        res.on('end', function () {
            future.fulfill(undefined, JSON.parse(response));
        });
    }).on('error', function(e) {
        future.fulfill(e, undefined);
    }).end();

    return future;
}

module.exports.request_wit = request_wit;