/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let ans=[];
    let temp=[];
    for (let i=0; i<arr.length;i++ ){
        temp.push(arr[i]);
        if(temp.length==size){
            ans.push(temp);
            temp=[];

        }
    }
    if (temp.length>0) ans.push(temp);
    return ans;
    
};
chunk([5,45,3,34,3,3,5,6,3,4,], 3)