var http = require('http');
var Future = require('futures').future;


var get_joke = function(cat) {
    var future = Future.create();
    var url = "http://api.icndb.com/jokes/random";
    if (cat) {
        url += "?limitTo=[" + cat + "]";
    }
    http.get(url, function(res) {
        var response = '';
        
module.exports.get_joke = get_joke;