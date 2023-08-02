/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let result = [];
    var sum = function(currentSum = 0, temp = [], j = 0) {

        if(currentSum == target) {
            result.push(temp.slice());
            return;
        }

        if(currentSum > target) {
            return;
        }

        for(let i = j; i < candidates.length; i++) {
            temp.push(candidates[i]);
            sum(currentSum + candidates[i], temp, i);
            temp.pop();
        }
    }

    sum(0, []);

    return result;
};
combinationSum([45,5,3,3,3],5)