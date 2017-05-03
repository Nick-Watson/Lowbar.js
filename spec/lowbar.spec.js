/* global describe, it */
const path = require('path');
const expect = require('chai').expect;
const sinon = require('sinon');
const _ = require(path.join(__dirname, '..', './lowbar.js'));

'use strict';

describe('_', function () {

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

    it('returns the same value that is passed as an argument', () => {
        const actual = _.identity() ;
        const expected = undefined ;
        const func = (x) => x;
        expect(actual).to.equal(expected);
        expect(_.identity(func)).to.equal(func);
        expect(_.identity([1,2,3])).to.eql([1,2,3]);
        expect(_.identity({a: [1,2,3]})).to.eql({a: [1,2,3]});
    });
    
    it('only returns the first argument passed', () => {
        const actual = _.identity(1,2,3,4,5);
        const expected = 1 ;
        expect(actual).to.equal(expected);
    });   
});

describe('_.first', () => {
    
    it('is a function', () => {
        const actual = _.first ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('returns the first value from a given array or string passed as the first argument', () => {
        const actual = _.first([1,2,3,4,5]) ;
        const expected = 1 ;
        expect(actual).to.equal(expected);
        expect(_.first('hello')).to.equal('h');
    });

    it('returns the first n values from a given array or string when passed a second n argument', () => {
        const actual = _.first('hello', 3) ;
        const expected = ['h', 'e', 'l'] ;
        expect(actual).to.eql(expected);
        expect(_.first([1,2,3,4], 2)).to.eql([1,2]);
    });

    it('returns undefined for any value passed as the first argument that is not an array or string', () => {
        const actual = _.first({'hello': 3, 'foo': 4}, 2) ;
        const expected = undefined ;
        const func = (x) => x;
        expect(actual).to.eql(expected);
        expect(_.first(func)).to.eql(undefined);
    });

    it('returns an empty array if the n argument passed is not a number', () => {
        const actual = _.first([1,2,3,4], [1,2]) ;
        const expected = [] ;
        expect(actual).to.eql(expected);
    });
});

describe('_.last', () => {
    
    it('is a function', () => {
        const actual = _.last ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('returns the last value from a given array or string passed as the first argument', () => {
        const actual = _.last([1,2,3,4,5]) ;
        const expected = 5 ;
        expect(actual).to.equal(expected);
        expect(_.last('hello')).to.equal('o');
    });

    it('returns the last n values from a given array or string when passed a second n argument', () => {
        const actual = _.last('hello', 3) ;
        const expected = ['l', 'l', 'o'] ;
        expect(actual).to.eql(expected);
        expect(_.last([1,2,3,4], 2)).to.eql([3,4]);

    });

    it('returns undefied for any value passed as the first argument that is not an array or string', () => {
        const actual = _.last({'hello': 3, 'foo': 4}, 2) ;
        const expected = undefined ;
        const func = (x) => x;
        expect(actual).to.eql(expected);
        expect(_.last(func)).to.eql(undefined);

    });

    it('returns an empty array if the n argument passed is not a number', () => {
        const actual = _.last([1,2,3,4], [1,2]) ;
        const expected = [] ;
        expect(actual).to.eql(expected);
    });
});

describe('_.each', () => {
        
    it('is a function', () => {
        const actual = _.each ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
   
    it('returns the argument passed to it', () => {
        const actual = _.each(1234);
        const expected = 1234 ;
        expect(actual).to.equal(expected);
        expect(_.each([1,2,3])).to.eql([1,2,3]);
        expect(_.each({})).to.eql({});
        expect(_.each()).to.eql();
        expect(_.each('hello')).to.equal('hello');
    });

    it('passes each element from a list as an argument to a second iteratee argument', () => {
        const spy = sinon.spy();
        const actual = _.each([1,2,3,4], spy);
        const expected = [1,2,3,4] ;
        expect(_.each(actual)).to.eql(expected);
        expect(spy.callCount).to.equal(4);
    });
    
    it('passes the element, index and list as arguments to the iteratee if the list is an array or string', () => {
        const spy = sinon.spy();
        const actual = _.each([1,2,3,4], spy);
        const expected = [1,2,3,4] ;
        expect(_.each(actual)).to.eql(expected);
        expect(spy.firstCall.args).to.eql([1, 0, [1,2,3,4]]);
        expect(spy.callCount).to.eql(4);
    });
    
    it('passes the value, key and list as arguments to the iteratee if the list is an object', () => {
        const spy = sinon.spy();
        const actual = _.each({'foo': 1, 'bar': 2 , 'dog': 3}, spy);
        const expected = {'foo': 1, 'bar': 2 , 'dog': 3} ;
        expect(_.each(actual)).to.eql(expected);
        expect(spy.thirdCall.args).to.eql([3, 'dog', {'foo': 1, 'bar': 2 , 'dog': 3}]);
    });
});

describe('_.filter', () => {
    
    it('is a function', () => {
        const actual = _.filter ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });
    
    it('passes each element in the array, string or object to the predicate and then returns a new array of all the values which evaluate to true', () => {
        const actual = _.filter([1,2,3,4], function (x) {return x % 2 === 0;}) ;
        const expected = [2,4] ;
        expect(actual).to.eql(expected);
        expect(_.filter([1,2,3,4], function (x) {return x > 10;})).to.eql([]);
        const spy = sinon.spy();
        _.filter([1,2,3], spy);
        expect(spy.callCount).to.equal(3);
    });

    it('returns an empty array if the first argument is not an array, string or object', () => {
        const actual = _.filter(1234) ;
        const expected = [] ;
        expect(actual).to.eql(expected);
        expect(_.filter(function (x) {return x + 1;})).to.eql(expected);
    });
    
    it('returns the first argument as an array if a predicate function is not passed as a second argument', () => {
        const actual = _.filter([1,2,3,4]);
        const expected = [1,2,3,4];
        expect(actual).to.eql(expected);
        expect(_.filter('hel')).to.eql(['h','e','l']);
        expect(_.filter({'foo': 1, 'bar': 2})).to.eql([1,2]);
    });

    it('returns an empty array if the predicate argument is not a function', () => {
        const actual = _.filter([1,2,3,4], 1) ;
        const expected = [] ;
        expect(actual).to.eql(expected);
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
