/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0;
    for (let i = 1; i <= n; i *= 10) {
      const d = i * 10;
      const q = Math.floor(n / d);
      const r = n % d;
      count += q * i + Math.min(Math.max(r - i + 1, 0), i);
    }
    return count;
};