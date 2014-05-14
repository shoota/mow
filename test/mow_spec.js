var should = require('should'),
    assert = require('assert'),
    mow = require('../lib/mow');


describe('about mow constructor',
    function(){

        describe('arugment is required',
            function(){
                it('shold not return mow object giving invalid arguments ',
                    function() {
                        (new mow()).should.be.empty;
                        (new mow('')).should.be.empty;
                        (new mow('invalid')).should.be.empty;
                    }
                );

                it('should create ATND Client with "ATND" string',
                    function() {
                        var atnd = new mow('ATND');
                        should.exist(atnd.client);
                    }
                );
            });
    }
);