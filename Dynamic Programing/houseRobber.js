var rob = function(nums) {
    if (nums.length == 1) return nums[0];
    let n= nums.length;

    let p1 = nums[0], p2 = Math.max(nums[1], p1);
    let maxVal = 0;
    for (let i = 2; i < n; i++) {
        maxVal = Math.max(p1+nums[i], p2);
        p1 = p2;
        p2 = maxVal;
    }
    return p2;
};