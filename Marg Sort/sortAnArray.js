
var sortArray = function(nums) {
    let compare = (a,b)=>{
        return a-b;
    }
    return nums.sort(compare);
    
};
sortArray()