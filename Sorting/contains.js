/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for(let i = 0; i < nums.length-1; i++) {
        for(let j = i+1; j < nums.length; j++ ) {
            if(Math.abs(nums[i] - nums[j]) <= valueDiff && Math.abs(i - j) <= indexDiff) {
                return true
            }
        }
    }
    return false
};
containsNearbyAlmostDuplicate();