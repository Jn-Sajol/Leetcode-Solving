/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let s = digits.join("");
    let n = BigInt(s) + 1n;
    
    // Convert the result back to an array of digits
    return n.toString().split("");
  };