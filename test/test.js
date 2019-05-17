'use strict';

var expect = require('chai').expect;
var curFormatter = require('../index');


describe('#curFormatter', function(){
    it('Add Rs to Amount', function(){
        var result = curFormatter.rupee("12.00");
        expect(result).to.equal("Rs 12.00");
    });
});