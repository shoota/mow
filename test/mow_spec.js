var should = require('should'),
    assert = require('assert'),
    mow = require('../lib/mow');


describe('mow',
    function(){

        describe('constructor require vendor string',function(){
            it('shold return empty object giving invalid argument ', function() {
                (new mow()).should.be.empty;
                (new mow('')).should.be.empty;
                (new mow('invalid')).should.be.empty;
            });

            it('should have client when create with valid argument', function() {
                var support_api = ['ATND', 'Doorkeeper', 'connpass', 'Zusaar'];
                support_api.forEach(function(api){
                    var test_mow = new mow(api);
                    should.exist(test_mow.client);
                    test_mow.client.should.have.property('vendor', api);
                });
            });
        });

        describe('find method', function(){
            it('findById', function(){
                var atnd = new mow('ATND');
                var response_json={};
                atnd.findById('51779', function(err, body){
                    body.should.not.be.empty;
                    assert(false);
                    done();
                });

            });
        });
    }
);