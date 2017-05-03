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

    it('passes each element in the array, string or object to the predicate and returns a new array of all the values which evaluate to false', () => {
        const actual = _.reject([1,2,3,4], function (x) {return x % 2 === 0;}) ;
        const expected = [1,3] ;
        expect(actual).to.eql(expected);
        expect(_.reject([1,2,3,4], function (x) {return x > 10;})).to.eql([1,2,3,4]);
    });
    
    it('returns an empty array if there is no predicate passed as a second argument', () => {
        const actual = _.reject(1234) ;
        const expected = [] ;
        expect(actual).to.eql(expected);
        expect(_.reject(function (x) {return x + 1;})).to.eql([undefined]);
    });
    
    it('returns the first argument as an array if the predicate is not a function', () => {
        const actual = _.reject([1,2,3,4], 1234);
        const expected = [1,2,3,4];
        expect(actual).to.eql(expected);
        expect(_.reject('hel', 2344)).to.eql(['h','e','l']);
        expect(_.reject({'foo': 1, 'bar': 2}, [])).to.eql([1,2]);
    });

    it('returns an empty array if the first argument is not an array, object or string', () => {
        const actual = _.reject(123, function (x) {return x < 0;}) ;
        const expected = [] ;
        expect(actual).to.eql(expected);
    });
});

describe('_.uniq', () => {
    
    it('is a function', () => {
        const actual = _.uniq ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('returns an empty array if the first argument is not an array/string', () => {
        const actual = _.uniq(1234) ;
        const expected = [] ;
        expect(actual).to.eql(expected);
        expect(_.uniq(function (x) {return x;})).to.eql(expected);
        expect(_.uniq({foo: 1, bar: 2})).to.eql(expected);
    });

    it('returns a new array of unique values from the given array/string', () => {
        const actual = _.uniq([1,2,3,4,4]) ;
        const expected = [1,2,3,4] ;
        const a = [1,2];
        const arr1 = a;
        const arr2 = a;
        expect(actual).to.eql(expected);
        expect(_.uniq([1,'foo','foo',3,3,4,4,6,7])).to.eql([1,'foo',3,4,6,7]);
        expect(_.uniq('hello')).to.eql(['h','e','l','o']);
        expect(_.uniq([arr1,arr2])).to.eql([[1,2]]);
    });
    
    it('returns a new array of unique values using a quicker alogrithm if a isSorted second argument is passed', () => {
        const actual = _.uniq([1,2,3,4,4], true) ;
        const expected = [1,2,3,4] ;
        const a = [1,2];
        const arr1 = a;
        const arr2 = a;
        expect(actual).to.eql(expected);
        expect(_.uniq([1,'foo','foo',5,4,4,5,6,7],true)).to.not.eql([1,'foo',4,5,6,7]);
        expect(_.uniq([arr1,arr2]), true).to.eql([[1,2]]);
    }); 
});


describe('_.map', () => {
    
    it('is a function', () => {
        const actual = _.map ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('returns an array of the first argument if no iteratee is passed', () => {
        const actual = _.map('he') ;
        const expected = ['h','e'] ;
        expect(actual).to.eql(expected);
        expect(_.map([1,2,3,4])).to.eql([1,2,3,4]);
        expect(_.map({foo: 1, bar: 2})).to.eql([1,2]);
    });
    
    it('returns an empty array if a number is passed as the first argument', () => {
        const actual = _.map(123);
        const expected = [] ;
        expect(actual).to.eql(expected);
    });
    
    it('passes each value of the array, the index and the array to an iteratee and then returns a new array of mapped values. Converts strings and objects to arrays before passing to the itereatee', () => {
        const spy = sinon.spy();
        const actual = _.map([1,2,3], (x) => x + 1);
        const expected = [2,3,4] ;
        expect(actual).to.eql(expected);
        expect(_.map(['foo', 'bar', [1,2], 34], function (x) {return x + 1;})).to.eql(['foo1', 'bar1','1,21', 35]);
        expect(_.map(['foo', 'bar', {'1':2}, 34], function (x) {return x + 1;})).to.eql(['foo1', 'bar1', '[object Object]1', 35]);
        _.map([1,2,3], spy);
        expect(spy.callCount).to.equal(3);
        expect(spy.firstCall.args).to.eql([1,0,[1,2,3]]);
        expect(_.map({a: 1, b: 2}, (x) => x + 1)).to.eql([2,3]);
    });
    
    it('returns undefined values if the iteratee is not a valid function', () => {
        const actual = _.map([1,2], 'hello');
        const expected = [undefined,undefined] ;
        expect(actual).to.eql(expected);
    });
});


describe('_.pluck', () => {
    
    it('is a function', () => {
        const actual = _.pluck ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('returns an array of property values from an array of objects', () => {
        const actual = _.pluck([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name') ;
        const expected = ['moe', 'larry', 'curly'] ;
        expect(actual).to.eql(expected);
        expect(_.pluck('hello', 'l')).to.eql([undefined, undefined, undefined, undefined, undefined]);
        expect(_.pluck([1,2,3])).to.eql([undefined, undefined, undefined]);
        expect(_.pluck(123)).to.eql([]);
    });

    it('if the property name is a number n it returns an array of values corresponding to the the nth index of each property ', () => {
        expect(_.pluck({1:'foo', 2:'bar', 3:'dog'}, 2)).to.eql(['o', 'r', 'g']);
        expect(_.pluck({1:[1,2,3], 2:[4,5], 3:[3,4,5]}, 1)).to.eql([2, 5, 4]);
    });
    
});


describe('_.reduce', () => {
    
    it('is a function', () => {
        const actual = _.reduce ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('takes the first element of an array if there is no memo passed', () => {
        const actual = _.reduce([1,2,3],(memo, x) => {memo += x; return memo;}) ;
        const expected = 7 ;
        expect(actual).to.equal(expected);
    });
    
    it('passes each value to an iteratee which has arguments memo, value, index and array. The memo is then returned and used in the next iteration', () => {
        const actual = _.reduce([1,2,3],(memo, x) => {memo += x; return memo;}, 0) ;
        const expected = 6 ;
        expect(actual).to.equal(expected);
        expect(_.reduce([1,2,3],(memo, x) => {memo.push(x * 2); return memo;}, [])).to.eql([2,4,6]);
        expect(_.reduce('hello',(memo, x) => {if (x === 'l') memo += x; return memo;}, '')).to.equal('ll');
        expect(_.reduce('hello', (memo, ele) => {memo[ele] = ele; return memo;}, {})).to.eql({h: 'h', e: 'e', l: 'l', o: 'o'});
        expect(_.reduce(123, (memo, ele) => {return memo += ele;},0)).to.equal(0);
        expect(_.reduce({foo:1, bar:2}, (memo, ele) => {memo[ele] = ele; return memo;}, {})).to.eql({1: 1, 2: 2});
        
        const spy = sinon.spy();
        _.reduce([1,2,3],spy, 0);
        expect(spy.firstCall.args).to.eql([0,1,0,[1,2,3]]);
        expect(spy.thirdCall.args).to.eql([undefined,3,2,[1,2,3]]);
        expect(spy.callCount).to.equal(3); 
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
