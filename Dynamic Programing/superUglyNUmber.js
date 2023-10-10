/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    var arrayN = new Array(n);
    var primesIndex = new Array(primes.length).fill(0);
    arrayN[0] = 1;
    for (var i = 1; i < n; i++) {
        var min = Number.MAX_VALUE;
        for (var j = 0; j < primes.length; j++) {
            min = Math.min(min, primes[j] * arrayN[primesIndex[j]]);
        }
      
};