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

    it('returns false if no value is passed', () => {
        const actual = _.contains([1,2,3]) ;
        const expected = false ;
        expect(actual).to.equal(expected);
    });

    it('returns true if the value is present in the list and the list is an array, string string or object', () => {
        const actual = _.contains([1,2,3], 2) ;
        const expected = true ;
        expect(actual).to.equal(expected);
        expect(_.contains('hello', 'o')).to.equal(expected);
        expect(_.contains({1:2, 3:4}, 4)).to.equal(expected);
        expect(_.contains(1234, 4)).to.equal(false);
    });

    it('checks for the value in the list from the index passed as the third argument', () => {
        const actual = _.contains([1,2,3], 2, 2) ;
        const expected = false ;
        expect(actual).to.equal(expected);
        expect(_.contains('hello', 'o', 5)).to.equal(expected);
        expect(_.contains({1:2, 3:4}, 4, 1)).to.equal(true);
        expect(_.contains(1234, 4)).to.equal(false);
    });

});

describe('_.every', () => {
    
    it('is a function', () => {
        const actual = _.every ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('returns true if no predicate is passed', () => {
        const actual = _.every([1,2,3]) ;
        const expected = true ;
        expect(actual).to.equal(expected);
        expect(_.every()).to.equal(expected);
    });

    it('returns false if the any list element returns false from the predicate or the predicate is not a function', () => {
        const actual = _.every([1,2,3], (x) => {return x > 2;}) ;
        const expected = false ;
        expect(actual).to.equal(expected);
        expect(_.every('hello', 'o')).to.equal(expected);
        expect(_.every({1:2, 3:3}, (x) => {return x === 2;})).to.equal(false);
    });

    it('returns true if the all list elements return ture from the predicate', () => {
        const actual = _.every([1,2,3], (x) => {return x > 0;}) ;
        const expected = true ;
        expect(actual).to.equal(expected);
        expect(_.every(['he'],(x) => {return x === 'he';})).to.equal(expected);
        expect(_.every({1:2, 3:3}, (x) => {return x > 1;})).to.equal(expected);
    });
});

describe('_.some', () => {
    
    it('is a function', () => {
        const actual = _.some ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('returns true if any list element is truthy', () => {
        const actual = _.some([null,false,'','hi']) ;
        const expected = true ;
        expect(actual).to.equal(expected);
        expect(_.some(' ')).to.equal(expected);
    });

    it('returns false all list elements are falsey values', () => {
        const actual = _.some(['',undefined,false, null]) ;
        const expected = false ;
        expect(actual).to.equal(expected);
        expect(_.some()).to.equal(expected);
    });

    it('passes each list element to the predicate and returns true if any element returns true ', () => {
        const actual = _.some([-1,-2,3], (x) => {return x > 0;}) ;
        const expected = true ;
        expect(actual).to.equal(expected);
        expect(_.some({1:'j',2:'t',3:'l'}, function (x) { return x === 'l';})).to.equal(expected);
        expect(_.some('hell', function (x) {return x === 'l';})).to.equal(expected);
    });
});

describe('_.extend', () => {
    
    it('is a function', () => {
        const actual = _.extend ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('shallow copies all properties from a source object to the destination and returns the destination', () => {
        const a = {name: 'moe'};
        const arr = [23,9];
        const b = {age: arr};
        const actual = _.extend(a, b);
        const expected = {name: 'moe', age: arr} ;
        expect(actual).to.eql(expected);
        expect(_.extend('hello', {1:2})).to.eql('hello');
        expect(_.extend(123, {1:2})).to.eql(123);
        expect(_.extend([1,2,3], {1:2})).to.eql([1,2,3]);
    });
    
    it('shallow copies all properties from multipe source objects to the destination and returns the destination', () => {
        const actual = _.extend({name: 'moe'}, {age: 50}, {colour: 'red', dog: 'yes'}, {1:2}); 
        const expected = {name: 'moe', age: 50, colour: 'red', dog: 'yes', 1:2} ;
        expect(actual).to.eql(expected);
    });
});

describe('_.defaults', () => {
    
    it('is a function', () => {
        const actual = _.defaults ;
        const expected = 'function' ;
        expect(actual).to.be.a(expected);
    });

    it('fills in undefined properties in obj argument with values present in a default object', () => {
        const actual = _.defaults({flavor: 'chocolate'}, {flavor: 'vanilla', sprinkles: 'lots'}) ;
        const expected = {flavor: 'chocolate', sprinkles: 'lots'} ;
        expect(actual).to.eql(expected);
    });
    
    it('fills in undefined properties in obj argument with values present in a list of default objects', () => {
        const actual = _.defaults({flavor: 'chocolate'}, {flavor: 'vanilla', sprinkles: 'lots'}, {hot: 'yes'}) ;
        const expected = {flavor: 'chocolate', sprinkles: 'lots', hot: 'yes'} ;
        expect(actual).to.eql(expected);
    });
});

describe('_.indexOf', () => {

    it('is a function', () => {
        expect(_.indexOf).to.be.a('function');
    });

    it('returns -1 if there is no value passed as the second argument', () => {
        const actual = _.indexOf([1, 2, 3]);
        const expected = -1;
        expect(actual).to.equal(expected);
    });

    it('returns -1 if the list argument is not an array or string', () => {
        const actual = _.indexOf(1234, 2);
        const expected = -1;
        expect(actual).to.equal(expected);
        expect(_.indexOf({'foo': 1}, 'foo')).to.equal(expected);
    });

    it('returns the first index of the value in the passed array/string', () => {
        const actual = _.indexOf([1, 2, 3, 4], 2);
        const expected = 1;
        expect(actual).to.equal(expected);
        expect(_.indexOf('hello', 'l')).to.equal(2);
    });

    it('returns -1 if the value is not present in the array/string', () => {
        const actual = _.indexOf([1, 2, 3, 4], 6);
        const expected = -1;
        expect(actual).to.equal(expected);
        expect(_.indexOf('hello', 'q')).to.equal(-1);
    });

    it('returns the index of the matching value after a given index if the third argument is passed is a number', () => {
        const actual = _.indexOf([4, 2, 3, 4], 4, 1);
        const expected = 3;
        expect(actual).to.equal(expected);
    });

    it('returns the index of the matching value using a binary serach if the isSorted argument is true', () => {
        const actual = _.indexOf([1, 2, 3, 4], 4, true);
        const expected = 3;
        expect(actual).to.equal(expected);
        expect(_.indexOf('hello', 'e', true)).to.equal(1);
    });

});

describe('_.once', () => {

    it('is a function', () => {
        expect(_.once).to.be.a('function');
    });

    it('returns a function which can only be called once (spy test)', function () {
        const spy = sinon.spy();
        const called = _.once(spy);
        called();
        called();
        expect(spy.calledOnce).to.equal(true);
    });

    it('returns a function which can only be called once', function () {
        let counter = 0;
        const addx = function (a, b) { counter += a + b; };
        const called = _.once(addx);
        called(3, 5);
        called(10, 10);
        expect(counter).to.equal(8);
    });
});

describe('_.memoize', () => {
    function fib (n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
    const quickFib = _.memoize(fib);
    const normalRes = fib(5);
    const quickRes = quickFib(5);

    it('is a function', () => {
        expect(_.memoize).to.be.a('function');
    });

    it('returns a function with a cache property', () => {
        expect(quickFib).to.be.a('function');
        expect(quickFib.hasOwnProperty('cache')).to.equal(true);
    });

    it('returns the same value as the passed function', () => {
        expect(quickRes).to.equal(normalRes);
    });

    it('returns a result from the cache object if the argument to the function has been passed previously (SPIES)', () => {
        const spy = sinon.spy(function (n) { return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2); });
        const fibonacci = _.memoize(spy);

        expect(fibonacci(9)).to.equal(34);
        expect(spy.callCount).to.equal(10);
        expect(fibonacci(10)).to.equal(55);
        expect(spy.callCount).to.equal(11);
        expect(fibonacci(9)).to.equal(34);
        expect(spy.callCount).to.equal(11);
    });

    it('returns a result faster if the argument to the function has been passed previously (TIME)', () => {
        const beforeSlow = new Date().getTime();
        fib(25);
        const afterSlow = new Date().getTime();
        quickFib(25);
        const beforeQuick = new Date().getTime();
        quickFib(25);
        const afterQuick = new Date().getTime();
        expect(afterQuick - beforeQuick).to.be.lessThan(afterSlow - beforeSlow);
    });
});

describe('_.delay', () => {
    let spy, result;
    before(function (done) {
        let start = new Date().getTime();
        spy = sinon.spy(function () {
            done();
            let end = new Date().getTime();
            result = end - start;
        });

        _.delay(spy, 500);
    });
    it('is a function', function () {
        expect(_.delay).to.be.a('function');
    });
    it('calls the function after a given amount of time', function () {
        expect(spy.called).to.be.true;
    });
    it('does not call the function before a given amount of time', function () {
        expect(result).to.not.be.lessThan(500);
    });
});

describe('_.shuffle', () => {

    it('is a function', () => {
        expect(_.shuffle).to.be.a('function');
    });

    it('returns an array of randomly sorted elements from the passed list argument', () => {
        let arr = [];
        for (let i = 0; i < 1000; i++) arr.push(i);
        expect(_.shuffle(arr.slice(0))).not.to.eql(arr);
    });

    it('works for strings and objects', () => {
        let str = '';
        let obj = {};
        for (let i = 0; i < 1000; i++) str += i;
        for (let i = 0; i < 1000; i++) obj[i] = i;
        expect(_.shuffle(str)).to.be.a('array');
        expect(_.shuffle(str)).not.to.eql(str.split(''));
        expect(_.shuffle(obj)).to.be.a('array');
        expect(_.shuffle(obj)).not.to.eql(Object.values(obj));
    });

});

describe('_.invoke', () => {

    it('is a function', () => {
        expect(_.invoke).to.be.a('function');
    });

    it ('calls the function for every element', () => {
    const nums = [[1,2],[3,4]];
    const words = [['he','llo'],['the','re']];
    expect(_.invoke(nums, 'reverse')).to.eql([[2,1],[4,3]]);
    expect(_.invoke(words, 'join', '')).to.eql(['hello', 'there']);
    });
});

describe('_.sortBy', () => {

    it('is a function', () => {
        expect(_.sortBy).to.be.a('function');
    });

    it('sorts a list in asscending order based on the results of iteratee', () => {
        expect(_.sortBy([1, 2, 3, 4, 5, 6], function (num) { return Math.sin(num); })).to.eql([5, 4, 6, 3, 1, 2]);

    });

    it('sorts a list in asscending order based on property name (string)', () => {
        const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
        expect(_.sortBy(stooges, 'name')).to.eql([{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}]);
    });

    it('sorts a list in asscending order based on property name (number)', () => {
        const stooges = [{name: 'moe', age: 50}, {name: 'larry', age: 70}, {name: 'curly', age: 60}];
        expect(_.sortBy(stooges, 'age')).to.eql([{name: 'moe', age: 50}, {name: 'curly', age: 60}, {name: 'larry', age: 70}]);
    });
});

describe('_.zip', () => {

    it('is a function', () => {
        expect(_.zip).to.be.a('function');
    });

    it('merges elements at corresponding indexes together', () => {
        expect(_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])).to.eql([['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]);
        expect(_.zip('he')).to.eql([['h'], ['e']]);
        expect(_.zip([1, 3], [2, 2])).to.eql([[1, 2], [3, 2]]);

    });
});

describe('_.sortedIndex', () => {

    it('is a function', () => {
        expect(_.sortedIndex).to.be.a('function');
    });

    it('dertimines the index at which a value should be inserted into a list', () => {
        expect(_.sortedIndex([10, 20, 30, 40, 50], 35)).to.equal(3);
    });

    it('dertimines the index at which a value should be inserted into a list using property name', () => {
        const stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
        expect(_.sortedIndex(stooges, {name: 'larry', age: 50}, 'age')).to.equal(1);
    });

    it('returns the correct index given a callback', () => {
        var actual = _.sortedIndex([1, 3, 2, 4, 5, 6], 5, el => Math.sin(el));
        expect(actual).to.equal(0);
    });

});

describe('_.flatten', () => {

    it('is a function', () => {
        expect(_.flatten).to.be.a('function');
    });

    it('should flatten array', () => {
        const actual = _.flatten([1, [2], [3, [[4]]]]);
        const expected = [1, 2, 3, 4];
        expect(actual).to.eql(expected);
        expect(_.flatten([1, [7, [8], 9], [2, [3, 4], 5, 6]])).to.eql([1, 7, 8, 9, 2, 3, 4, 5, 6]);
    });

    it('does not mutate the original array', () => {
        expect(_.flatten([])).to.not.equal([]);
    });

    it('should only flatten one level if passed boolean', () => {
        const actual = _.flatten([1, [2], [3, [[4]]]], true);
        const expected = [1, 2, 3, [[4]]];
        expect(actual).to.eql(expected);
        expect(_.flatten([1, [2, [3]]], true)).to.eql([1, 2, [3]]);
    });

});

describe('_.intersection', () => {

    it('is a function', () => {
        expect(_.intersection).to.be.a('function');
    });

    it('returns an array', () => {
        expect(_.intersection([])).to.eql([]);
    });
    it('finds the intersection', () => {
        expect(_.intersection([1, 2, 3, 4], [1, 3, 4, 5, 6], [1, 4])).to.eql([1, 4]);
        expect(_.intersection([1, 2], [1])).to.eql([1]);
    });

});

describe('_.difference', () => {

    it('is a function', () => {
        expect(_.difference).to.be.a('function');
    });

    it('returns an array', () => {
        expect(_.difference([])).to.eql([]);
    });
    it('finds the difference', () => {
        expect(_.difference([1, 2, 3, 4], [3, 4, 5, 6], [1, 4])).to.eql([2, 5, 6]);
        expect(_.difference([1, 2, 3, 4], [3, 4, 5, 6], [1, 4, 6])).to.eql([2, 5]);
        expect(_.difference([1, 2], [1])).to.eql([2]);
    });

});
