var should = require('should'),
    assert = require('assert'),
    client = require('../lib/client');


describe('about client constructor', function(){
    it('should has vendor property', function() {
        var vendor_test = new client('ATND');
        vendor_test.should.have.property('vendor', 'ATND');
    });

});