var util = require('../lib/util');

var client = function(vendor) {
	this.vendor = vendor;
}

client.prototype.find = function(cond, option, callback) {
	var cb;
	var condition;

	if (! option typeof === 'function') {
		cb = callback;
		condition = util.margeObj(cond, option);
	} else {
		cb = option;
	}

	var url = util.makeQuery(this.vendor, cond);
	
}
