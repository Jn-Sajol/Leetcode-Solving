/**
 * @param {number} n
 * @param {number[][]} trusts
 * @return {number}
 */
var findJudge = function(n, trusts) {
    if (trusts.length == 0 && n == 1)
        return 1;   // Town judge is the only one in the town (what a loser)

    // To solve this problem, we can check each person in the array
    // If degree in == n - 1, then property 2 is satisfied

    // Needs to start at 1, since people are labeled 1 - n
    let degreeArr = new Array(n + 1).fill(0); 

    for (let trust of trusts) {
        // Update out degree of trust[0]
        // Update in degree of trust[1]

        degreeArr[trust[0]]--; 
        degreeArr[trust[1]]++;
    }

    // Search for town judge
    for (let i = 0; i < degreeArr.length; i++)
        if (degreeArr[i] == n - 1)
            return i;

    return -1;
};