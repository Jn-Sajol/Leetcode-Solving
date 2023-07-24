var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length -1;
    while(start<=end){
        let middle = Math.round((start+end)/2);
        if(nums[middle]===target)
        { 
            return middle;
        }
        else if(nums[middle]<target){
            start = middle +1;
        }
        else if(nums[middle]>target){
            end = middle -1;
        }
    }
    return start;
};