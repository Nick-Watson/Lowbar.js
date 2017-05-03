/* global describe, it */
const path = require('path');
const expect = require('chai').expect;
// const sinon = require('sinon');
const _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
    'use strict';

    it('is an object', function () {
        expect(_).to.be.an('object');
    });
});

describe('_.identity', () => {
    
    it('is a function', () => {
        const actual = _.identity ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });      
});

describe('_.first', () => {
    
    it('is a function', () => {
        const actual = _.first ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.last', () => {
    
    it('is a function', () => {
        const actual = _.last ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.each', () => {
        
    it('is a function', () => {
        const actual = _.each ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.filter', () => {
    it('is a function', () => {
        const actual = _.filter ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.reject', () => {
    it('is a function', () => {
        const actual = _.reject ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.uniq', () => {
    
    it('is a function', () => {
        const actual = _.uniq ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.map', () => {
    
    it('is a function', () => {
        const actual = _.map ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.pluck', () => {
    
    it('is a function', () => {
        const actual = _.pluck ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.reduce', () => {
    
    it('is a function', () => {
        const actual = _.reduce ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.contains', () => {
    
    it('is a function', () => {
        const actual = _.contains ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.every', () => {
    
    it('is a function', () => {
        const actual = _.every ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.some', () => {
    
    it('is a function', () => {
        const actual = _.some ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.extend', () => {
    
    it('is a function', () => {
        const actual = _.extend ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.defaults', () => {
    
    it('is a function', () => {
        const actual = _.defaults ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});


describe('_.indexOf', () => {

    it('is a function', () => {
        const actual = _.indexOf ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.once', () => {

    it('is a function', () => {
        const actual = _.once ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.memoize', () => {

    it('is a function', () => {
        const actual = _.memoize ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.delay', () => {

    it('is a function', () => {
        const actual = _.delay;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.shuffle', () => {

    it('is a function', () => {
        const actual = _.shuffle ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.invoke', () => {

    it('is a function', () => {
        const actual = _.invoke ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.sortBy', () => {

    it('is a function', () => {
        const actual = _.sortBy ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.zip', () => {

    it('is a function', () => {
        const actual = _.zip ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.sortedIndex', () => {

    it('is a function', () => {
        const actual = _.sortedIndex ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.flatten', () => {

    it('is a function', () => {
        const actual = _.flatten ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.intersection', () => {

    it('is a function', () => {
        const actual = _.intersection ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});

describe('_.difference', () => {

    it('is a function', () => {
        const actual = _.difference ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
});
