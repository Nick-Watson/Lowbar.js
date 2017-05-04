let _ = {};

_.identity = (value) => value;

_.first = (array, n) => {
    if (typeof array === 'string') array = array.split('');

    if (Array.isArray(array)) {
        if (!n) return array[0];
        
        return array.slice(0,n);
    }
};

_.last = (array, n) => {
    if (n && typeof n !== 'number') return [];
    if (typeof array === 'string') array = array.split('');

    if (Array.isArray(array)) {
        if (!n) return array[array.length - 1];
        
        return array.slice(-n);
    }
};

_.each = (list, iteratee, context) => {
    let key;
    if (!iteratee || typeof list === 'number') return list;
    if (!context) context = this;
    if (Array.isArray(list)) {       
        for (let i = 0 ; i < list.length; i++) {
            iteratee.call(context,list[i], i, list);
        }   
        return list;
    }

    for (key in list) {
        iteratee.call(context,list[key], key, list);
    }

    return list;
};

_.filter = (array, predicate, context) => {
    if (typeof array === 'number' || typeof array === 'function') return [];
    if (typeof array === 'string') array = array.split('');
    if (array.constructor === Object) array = Object.values(array);
    if (!predicate) return array;
    if (typeof predicate !== 'function') return [];
    if (!context) context = this;

    let filteredElements = [];

    for (let i = 0; i < array.length; i++) {
        if (predicate.call(context, array[i])) filteredElements.push(array[i]);
    }

    return filteredElements; 
};

_.reject = (array, predicate, context) => {
    if (typeof array === 'function') return [undefined];
    if (!predicate || typeof array === 'number') return [];
    if (typeof array === 'string') array = array.split('');
    if (array.constructor === Object) array = Object.values(array);
    if (typeof predicate !== 'function') return array;
    if (!context) context = this;

    let rejectedElements = [];

    for (let i = 0 ; i < array.length; i++) {
        if (!predicate.call(context, array[i])) rejectedElements.push(array[i]);
    }

    return rejectedElements; 
};

_.uniq = (array, isSorted) => {
    if (typeof array === 'string') array = array.split('');
    if (Array.isArray(array)) {
        let uniqElements = [];
        if (isSorted) {
            array.forEach((x, i, arr) => {
                if (x !== arr[i + 1]) uniqElements.push(x);
            });
            return uniqElements;
        }
        array.forEach((x) => {
            if (uniqElements.indexOf(x) < 0) uniqElements.push(x);
        });
        return uniqElements;
    }

    return [];
};

_.map = (array, iteratee, context) => {
    if (typeof array === 'number') return [];
    if (typeof array === 'string') array = array.split('');
    if (array.constructor === Object) array = Object.values(array);
    if (!iteratee) return array; 
    if (!context) context = this;

    let mappedElements = [];
    
    array.forEach((x, i, array) => {
        if (typeof iteratee !== 'function') mappedElements.push(undefined);
        else mappedElements.push(iteratee.call(context,x, i, array));
    });

    return mappedElements; 
};

_.pluck = (array, prop) => {
    if (typeof array === 'number') return [];
    if (array.constructor === Object) array = Object.values(array);
    
    let propValues = [];
    
    for (let i = 0; i < array.length; i++) {
        propValues.push(array[i][prop]);
    }

    return propValues;
};

_.reduce = (array, iteratee, memo, context) => {
    if (!context) context = this;
    if (array.constructor === Object) array = Object.values(array);
    if (memo === undefined) memo = array[0];
 
    for (let i = 0 ; i < array.length; i++) {
       memo = iteratee.call(context, memo, array[i], i, array);
    }

    return memo;  
};

_.contains = (list, value, fromIndex) => {
    if (!value) return false;
    if (list.constructor === Object) list = Object.values(list);
    let i = 0;
    if (fromIndex >= 0 && typeof fromIndex === 'number') i = fromIndex;
    for (i; i < list.length; i++) {
        if (list[i] === value) return true;
    }

    return false;
};

_.every = (list, predicate, context) => {
    if (!predicate) return true;
    if (typeof predicate !== 'function') return false;
    if (list.constructor === Object) list = Object.values(list);
    if (!context) context = this;
    for (let i = 0; i < list.length; i++) {
        if (!predicate.call(this, list[i])) return false;
    }

    return true;
};

_.some = (list, predicate, context) => {
    if (!list && !predicate) return false; 
    if (list.constructor === Object) list = Object.values(list);
    if (!context) context = this;
    for (let i = 0; i < list.length; i++) {
        if (predicate)  {
            if (predicate.call(context,list[i])) return true;
        }
        else {
            if (list[i]) return true; 
        }
    }

    return false;

};

_.extend = function (destination) {
    let key;
    for (let i = 0; i < arguments.length; i++) {
        for (key in arguments[i]) {
            destination[key] = arguments[i][key];
        }
    }

    return destination;
};

_.defaults = function (object) {
    let key;
    for (let i = 0; i < arguments.length; i++) {
        for (key in arguments[i]) {
            if (!object.hasOwnProperty(key)) object[key] = arguments[i][key];
        }
    }
    return object;
};

_.indexOf = () => {};

_.once = () => {};

_.memoize = () => {};

_.delay = () => {};

_.shuffle = () => {};

_.invoke = () => {};

_.sortBy = () => {};

_.zip = () => {};

_.sortedIndex = () => {};

_.flatten = () => {};

_.intersection = () => {};

_.difference = () => {};
  
  module.exports = _;