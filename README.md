# Lowbar.js

A reimplantation of the [underscore.js](http://underscorejs.org/) functional library using Node.js. This project uses a Test Driven Development process using Mocha, Chai and Sinon.

### Prerequisites

Please ensure you have the following installed;

```
Node.js v7.0.0 or higher
```
Available [here](https://nodejs.org/en/download/current/)

## Getting Started and Tests

The functions are located in the lowbar.js file. In order to view the tests used in the TDD process please follow the instructions below.

From the command line and in a directory of your choosing;

``````
git clone https://github.com/Nick-Watson/Lowbar.js.git

cd Lowbar

npm install

npm test
``````
N.B. some functions use the Object.values method which is an ES2017 feature that Node has supported from version 7.0.0.

## Built With

* [Mocha](https://mochajs.org/) - Test framework
* [Chai](http://chaijs.com/) - Assertation library
* [Sinon](http://sinonjs.org/) - Test spies

# Methods

The functions implemented are listed below;

## Collections
### each
```````
_.each(list, iteratee, [context])
```````
Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.
### map
```````
_.map(list, iteratee, [context]) 
```````
Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
### reduce
 ```````
 _.reduce(list, iteratee, [memo], [context])
 ```````
 Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
### filter
 ```````
 _.filter(list, predicate, [context])
 ```````
 Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
### reject
 ```````
 _.reject(list, predicate, [context]) 
 ```````
 Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
### every
 ```````
 _.every(list, [predicate], [context]) 
 ```````
 Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found.
### some
 ```````
 _.some(list, [predicate], [context]) 
 ```````
 Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found.
### contains
 ```````
 _.contains(list, value, [fromIndex]) Alias: includes 
 ```````
 Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.
### invoke
 ```````
 _.invoke(list, methodName, *arguments) 
 ```````
 Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
### pluck
 ```````
 _.pluck(list, propertyName) 
 ```````
 A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.
### sortBy
 ```````
 _.sortBy(list, iteratee, [context]) 
 ```````
 Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length).
### shuffle
 ```````
 _.shuffle(list) 
 ```````
 Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.

## Arrays
### first
 ```````
 _.first(array, [n])
 ```````
 Returns the first element of an array. Passing n will return the first n elements of the array. 
### last
 ```````
 _.last(array, [n]) 
 ```````
 Returns the last element of an array. Passing n will return the last n elements of the array.
### flatten
 ```````
 _.flatten(array, [shallow]) 
 ```````
 Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.
### intersection
 ```````
 _.intersection(*arrays) 
 ```````
 Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.
### difference
 ```````
 _.difference(array, *others) 
 ```````
 Similar to without, but returns the values from array that are not present in the other arrays.
### uniq
 ```````
 _.uniq(array, [isSorted], [iteratee]) 
 ```````
 Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function.
### zip
 ```````
 _.zip(*arrays) 
 ```````
 Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes. Use with apply to pass in an array of arrays. If you're working with a matrix of nested arrays, this can be used to transpose the matrix.
### indexOf
 ```````
 _.indexOf(array, value, [isSorted]) 
 ```````
 Returns the index at which value can be found in the array, or -1 if value is not present in the array. If you're working with a large array, and you know that the array is already sorted, pass true for isSorted to use a faster binary search ... or, pass a number as the third argument in order to look for the first matching value in the array after the given index. 
### sortedIndex
 ```````
 .sortedIndex(list, value, [iteratee], [context]) 
 ```````
 Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order. If an iteratee function is provided, it will be used to compute the sort ranking of each value, including the value you pass. The iteratee may also be the string name of the property to sort by (eg. length).

## Functions
### memoize
 ```````
 _.memoize(function) 
 ```````
 Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key. The cache of memoized values is available as the cache property on the returned function.
### delay
 ```````
 _.delay(function, wait, *arguments) 
 ```````
 Invokes function after wait milliseconds. If you pass the optional arguments, they will be forwarded on to the function when it is invoked.
### once
 ```````
 _.once(function) 
 ```````
 Creates a version of the function that can only be called one time. Repeated calls to the modified function will have no effect, returning the value from the original call. Useful for initialization functions, instead of having to set a boolean flag and then check it later.

## Objects
### extend
 ```````
 _.extend(destination, *sources) 
 ```````
 Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object. Any nested objects or arrays will be copied by reference, not duplicated. It's in-order, so the last source will override properties of the same name in previous arguments.
### defaults
 ```````
 _.defaults(object, *defaults) 
 ```````
 Fill in undefined properties in object with the first value present in the following list of defaults objects.

## Utility
### identity
 ```````
 _.identity(value) 
 ```````
 Returns the same value that is used as the argument. In math: f(x) = x This function looks useless, but is used throughout Underscore as a default iteratee.