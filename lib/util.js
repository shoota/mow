/*!
 * mow - util
 * Copyright(c) 2014 Shoota Kumano <shoota.dev@gmail.com>
 * MIT Licensed
 */

var _ud = require('underscore');

module.exports = {
    toQueryString : function(condition){
        //parse query params
        var ret='?format=json';

        var pairs = _ud.pairs(condition);
        
        pairs.forEach(function(pair){
        	var k = pair[0];
        	var v = pair[1];
        	ret = ret+'&'+k+'='+v;
        }); 
        return ret;
    }
};
