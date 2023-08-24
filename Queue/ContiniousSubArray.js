/**
 * @param {number[]} nums
 * @return {number}
 */
// time complexity: n*log(n)
// space complexity: n
var continuousSubarrays = function(nums) {
    class sortedList {
        constructor(){
            this.list = []
        }
        add(num) {
            let idx = this.bs(num)
            this.list.splice(idx, 0, num)
        }
        del(num){
            let idx = this.bs(num)
            this.list.splice(idx, 1)
        }
        isEmpty(){
            return this.list.length === 0
        }
        max(){
            return this.list[this.list.length-1]
        }
        min(){
            return this.list[0]
        }
        get(){
            return this.list
        }
        // binary search
        // find the smallest idx where num is greater than target
        bs(target){
            let arr = this.list
            let l = 0
            let r = arr.length
            while(r > l){
                let m = Math.floor((r+l)/2)
                if(arr[m] >= target){
                    r = m
                }else{
                    l = m+1
                }
            }
            return r
        }
    }
    
    let res = 0
    let sl = new sortedList()
    for(let i=0, j=0; j<nums.length; j++){
        sl.add(nums[j])
        while(!sl.isEmpty() && (sl.max()-sl.min()) > 2){
            sl.del(nums[i++])
        }
        res += (j-i+1)
    }
    return res
};
continuousSubarrays();