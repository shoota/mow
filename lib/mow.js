'use strict'

var client = require('./Client'),
    util = require('./util'),
    _ud  =require('underscore');

// constructor
var mow = function(vendor){
	if(! _ud.contains(this.SUPPORT_API, vendor)) return ;
	this.client = new client(vendor);
};

module.exports = mow;

mow.prototype.SUPPORT_API = ['ATND', 'Doorkeeper', 'connpass', 'Zusaar'];


mow.prototype.findById = function(id, callback){
    var query = util.addQuery('', {id : id});
	this.client.find(query, callback);
};