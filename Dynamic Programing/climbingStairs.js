/**
 * @param {number} n
 * @return {number}
 */

// Function to calculate the factorial of a number
function factorial(num) {
    if (num<=1) {
        return 1;
    }
    return num*factorial(num-1);
}

// Function to calculate the value of nCr
function calculate_nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

var climbStairs = function(n) {
    let q = n/2;
    let count = 0;

    while (q <= n){
        let combN = q
        let combR = n-q

        count += calculate_nCr(combN, combR)

        q += 1;
    }

    return count;
};