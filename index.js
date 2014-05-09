'use strict'

var client = require('../lib/client');
var util = require('../lib/util');

// constructor
var mow = function(vendor){
	if(! vendor) return undefined;
	this.client = new client(vendor):
};

module.exports = mow;


mow.prototype.findById = function(id, callback){
	this.client.find({id:id}, callback);
}