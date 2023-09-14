var minPatches = function(nums, n) {
    let index = 0;
    let sumCanCreate = 0;
    let patchCount = 0;
    while(sumCanCreate < n) {
        if(sumCanCreate+1 < nums[index] || (index >= nums.length && sumCanCreate+1 < n)) {
            patchCount++;
            sumCanCreate += (sumCanCreate+1);
        } else {
            sumCanCreate += nums[index];
            index++;
        }
    }
    return patchCount;
};
minPatches()