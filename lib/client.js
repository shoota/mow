/*!
 * mow - client
 * Copyright(c) 2014 Shoota Kumano <shoota.dev@gmail.com>
 * MIT Licensed
 */
var util    = require('util'),
    request = require('request');

var Client = function(vendor) {
	this.vendor = vendor;
	this.url_map = {
		'ATND': 'http://api.atnd.org/events/',
		'Zusaar': ''
	};
};


Client.prototype.find = function(queryString, callback) {
	var url = this.url_map[this.vendor]+queryString;
    request(url, function (error, response, body){
    	console.log(body);
    	callback(error, body);
    });
};


module.exports = Client;