/*!
 * mow
 * Copyright(c) 2014 Shoota Kumano <shoota.dev@gmail.com>
 * MIT Licensed
 */

'use strict'

var client = require('./client'),
    util = require('./util'),
    _ud  =require('underscore');

// constructor
var mow = function(vendor){
	if(! _ud.contains(this.SUPPORT_API, vendor)) return ;
	this.client = new client(vendor);
};

module.exports = mow;

mow.prototype.SUPPORT_API = ['ATND', 'Doorkeeper', 'connpass', 'Zusaar'];


mow.prototype.to = function(){
    var result = this.result;
};


/**
 * find method wrapper
 * @param condition Object
 * @param callback  Function
 */
mow.prototype.find = function(condition, callback){
    var query = util.toQueryString(condition);
    this.client.find(query, callback);
};

mow.prototype.findById = function(id, callback){
    this.find({id: id}, callback);
};