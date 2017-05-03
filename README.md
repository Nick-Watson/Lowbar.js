# Lowbar.js

A reimplantation of the underscore.js library using Node.js and Test Driven Development

## Collections
* each
    - _.each(list, iteratee, [context])
    - Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.
* map
    - _.map(list, iteratee, [context]) 
    - Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
* reduce
    - _.reduce(list, iteratee, [memo], [context])
    - Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
* filter
    - _.filter(list, predicate, [context])
    - Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
* reject
    - _.reject(list, predicate, [context]) 
    - Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
* every
* some
* contains
* invoke
* pluck
    - _.pluck(list, propertyName) 
    - A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.
* sortBy
* shuffle

## Arrays
* first
    - _.first(array, [n])
    - Returns the first element of an array. Passing n will return the first n elements of the array. 
* last
    - _.last(array, [n]) 
    - Returns the last element of an array. Passing n will return the last n elements of the array.
* flatten
* intersection
* difference
* uniq
    - _.uniq(array, [isSorted], [iteratee]) 
    - Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function.
* zip
* indexOf
* sortedIndex

## Functions
* memoize
* delay
* once

## Objects
* extend
* defaults

## Utility
* identity
    - Returns the same value that is used as the argument