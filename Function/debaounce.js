/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeOut = null
    return (...args) => {
        clearTimeout(timeOut)
        timeOut = setTimeout(fn, t, ...args)
    }
};

debounce();