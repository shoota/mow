'use strict'

var client = require('./Client');
var util = require('./util');

// constructor
var mow = function(vendor){
	if(! vendor) return ;
	this.client = new client(vendor);
};

module.exports = mow;


mow.prototype.findById = function(id, callback){
    var query = util.addQuery('', {id : id});
	this.client.find(query, callback);
};