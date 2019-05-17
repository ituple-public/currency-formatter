'use strict';

var expect = require('chai').expect;
var curFormatter = require('../index');


describe('#curFormatter', function(){
    it('Add Rs to Amount', function(){
        var result = curFormatter.rupee("12.00");
        expect(result).to.equal("Rs 12.00");
    });

    it('List Buckets', function(){
        curFormatter.listbuckets().then(function(data){
            expect(data.Buckets.length).to.greaterThan(0);
        }).catch(function(err){
            console.log(err.message);
        });
    });
});