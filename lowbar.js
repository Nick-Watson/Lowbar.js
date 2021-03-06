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
    let func = iteratee.bind(context);
    if (Array.isArray(list)) {       
        for (let i = 0 ; i < list.length; i++) {
            func(list[i], i, list);
        }   
        return list;
    }

    for (key in list) {
        func(list[key], key, list);
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

_.indexOf = (array, value, isSorted) => {
    if (Array.isArray(array) || (typeof array === 'string')) {
        if (isSorted) return binarySearch(array, value);
        
        let i = 0;
        if (typeof isSorted === 'number') i = isSorted;
        for (i; i < array.length; i++) {
            if (array[i] === value) return i;
        }
    }

    return -1;

    function binarySearch (list, value) {
        let start = 0;
        let end = list.length - 1;
        let mid = Math.floor(end + start / 2);

        for (let i = 0 ; i < list.length ; i++)  { 
            
            if (value > list[mid]) {
            start = mid + 1;
            mid = Math.floor((end + start) / 2);
            }

            if (value < list[mid]) {
                end = mid - 1 ;
                mid = Math.floor((end + start) / 2);     
            }
            
            if (value === list[mid]) return mid;
        }
    }
};

_.once = (func) => {
    let canRun = true;
    return function () {
        if (canRun) {
            canRun = false;
            func.apply(this, arguments);
        }
    };
};

_.memoize = (func) => {
    const cache  = {};
    
    const fast = function () {
        const arg = JSON.stringify(arguments[0]);
        if (cache[arg]) return cache[arg];
        else {
            const res = func.apply(null, arguments);
            cache[arg] = res;
            return res;
        }
    };

    fast.cache = cache;

    return fast;
};

_.delay = function (func, wait) {
    const args = Array.prototype.slice.call(arguments, 2);
    setTimeout (function () {
       func.apply(null, args);
    }, wait);
};

_.shuffle = (list) => {
    if (typeof list === 'number') return [];
    if (typeof list === 'string') list = list.split('');
    if (list.constructor === Object) list = Object.values(list);

    return fyShuffle(list);

    function fyShuffle (array) {
        let numberOfElements = array.length, temp, index;

        while (numberOfElements) {
            index = Math.floor(Math.random() * numberOfElements--);
            temp = array[numberOfElements];
            array[numberOfElements] = array[index];
            array[index] = temp;
        }

        return array;
    }
};

_.invoke = function (list, method) {
    const args = Array.prototype.slice.call(arguments,2);
    return list.map(ele => ele[method].apply(ele, args));
};

_.sortBy = (list, iteratee, context) => {
    if (!context) context = this;
    if (typeof iteratee === 'string') {
      let sortedValues = [];
      const ordered = _.map(list, x => x[iteratee]).sort();
      ordered.forEach(x => {
          list.forEach(key => {
              if (key[iteratee] === x) {
                  sortedValues.push(key);
              }
          });
      });
      return sortedValues;
    }
    if (Array.isArray(list)) {
        return list.sort((a,b) => iteratee.call(context,a) - iteratee.call(context,b));
    }
    return [];
};

_.zip = function () {
    if (arguments.length === 0) return [];
    let zippedArrays = [];
    for (let i = 0; i < arguments[0].length; i++) {
        let arr = [];
        for (let j = 0; j < arguments.length; j++) {
            arr.push(arguments[j][i]);
        }
        zippedArrays.push(arr);
    }
    return zippedArrays;
};

_.sortedIndex = function (list, value, iteratee, context) {
    if (!context) context = this;
    if (arguments.length >= 3) {
        return binarySearch(_.sortBy(list, iteratee, context), value);
    }
    return binarySearch(list, value);

    function binarySearch (list, value) {
        let start = 0, end = list.length - 1, mid;
            mid = Math.floor((end + start) / 2);

        for (let i = 0 ; i < list.length - 1 ; i++)  { 
            if (list[mid] === value) return mid;
            
            if (value < list[mid]) {
                end = mid - 1 ;
                mid = Math.floor((end + start) / 2);     
            }
            
            if (value > list[mid]) {
                start = mid + 1;
                mid = Math.floor((end + start) / 2);
            }
 
        }
        return mid + 1;
    }
};

_.flatten = (array, shallow) => {
    let flattenedValues = [];

    if (shallow) {
        array.forEach((x) => {
            if (Array.isArray(x)) {
                x.forEach((y) => {
                    flattenedValues.push(y);
                });
            }
            else flattenedValues.push(x);
        });
        return flattenedValues;
    }
    
    recursiveFlatten(array);


    return flattenedValues;

    function recursiveFlatten (array) {
        array.forEach((ele) => {
        if (!Array.isArray(ele)) flattenedValues.push(ele);
        else recursiveFlatten(ele);
        });
    }
};

_.intersection = function () {
    let out = [];
    const args = Array.from(arguments);
    args[0].forEach((ele) => {
        let isInt = true;
        args.forEach((x) => {
            if (x.indexOf(ele) < 0) isInt = false;
        });
        if (isInt === true) out.push(ele);
    });

    return out;
};

_.difference = function () {
    let differentValues = [];
    const args = Array.from(arguments);
    args.forEach((arg, i, args) => {
        arg.forEach((ele) => {
            let timesPresentInArrays = 0;
            args.forEach((x) => {
                if (x.indexOf(ele) >= 0) timesPresentInArrays ++;
            });
            if (timesPresentInArrays === 1) differentValues.push(ele);
        });
    });

    return differentValues;
    
};
  
  module.exports = _;