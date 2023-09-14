var minPatches = function(nums, n) {
    let index = 0;
    let sumCanCreate = 0;
    let patchCount = 0;
    while(sumCanCreate < n) {
        // if we can't create nums[index] or we at the end of nums and can't create n.
        // we can create nums[index] only if it is lower or equal to sumCanCreate+1.
        if(sumCanCreate+1 < nums[index] || (index >= nums.length && sumCanCreate+1 < n)) {
            patchCount++;
            // because we "patch" the next number in the sequence.
            sumCanCreate += (sumCanCreate+1);
        // if we can create nums[index].
        } else {
            // we can create anything from current sumCanCreate to (sumCanCreate + nums[index]).
            sumCanCreate += nums[index];
            index++;
        }
    }
    return patchCount;
};