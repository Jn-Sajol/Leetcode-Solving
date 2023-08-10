/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let numbers = [];
    let fact = 1;
    for(let i = 0; i < n; i++) {
        numbers.push(i+1); 
        fact = fact * (i+1);
    }
    let ans = "";
    while(numbers.length > 1) {
        fact = Math.floor(fact/(numbers.length));
        let temp = Math.ceil(k/fact);
        let val = numbers.splice(temp - 1, 1);
        ans += val;
        k = k%fact;
    }
    ans += numbers[0];
    return ans;
};
performance();