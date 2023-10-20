/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let s = digits.join("");
    
    // Increment the number represented by the string by 1
    // Using BigInt and 1n to remove the hassle of big integer
    let n = BigInt(s) + 1n;
    
    // Convert the result back to an array of digits
    return n.toString().split("");
  };