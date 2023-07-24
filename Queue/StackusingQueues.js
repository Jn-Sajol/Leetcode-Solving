
var MyStack = function() {
    this.arr =[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    return this.arr.unshift(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.arr.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.arr[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.arr.length == 0){
        return true;
    }
    return false;
};
