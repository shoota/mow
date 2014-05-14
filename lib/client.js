var util = require('util');

var Client = function(vendor) {
	this.vendor = vendor;
};

Client.prototype.find = function(query, callback) {

	var url = util.makeQuery(this.vendor, cond);
    // request to API
	
};


module.exports = Client;