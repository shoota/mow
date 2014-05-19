var should = require('should'),
    assert = require('assert'),
    mow = require('../lib/mow');


describe('about mow constructor',
    function(){

        describe('required constructor arugment',
            function(){
                it('shold return empty object giving invalid arguments ',
                    function() {
                        (new mow()).should.be.empty;
                        (new mow('')).should.be.empty;
                        (new mow('invalid')).should.be.empty;
                    }
                );

                it('should have client when create with support API',
                    function() {

                        var support_api = ['ATND', 'Doorkeeper', 'connpass', 'Zusaar'];

                        support_api.forEach(function(api){
                            var test_mow = new mow(api);
                            should.exist(test_mow.client);
                            test_mow.client.should.have.property('vendor', api);
                        });
                    }
                );
            }
        );
    }
);