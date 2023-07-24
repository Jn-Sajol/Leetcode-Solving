// /** not ooptimise code
// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var trap = function(height) {
//   let n = height.length;
//   let water = 0;
//   for (let i = 0; i < n; i++) {
//     let left_max = 0, right_max = 0;
//     let j = i;
//     while (j < n) {
//       right_max = Math.max(right_max, height[j]);
//       j++;
//     }
//     j = i;
//     while (j >= 0) {
//       left_max = Math.max(left_max, height[j]);
//       j--;
//     }
//     j = i;
//     water += Math.min(left_max, right_max) - height[i];
//   }
//   return water;
// }
/**
 * 
 * Optimise code bellow
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let left = 0, right = n - 1, left_max = 0, right_max = 0, water = 0;
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] > left_max) left_max = height[left];
            else water += left_max - height[left];
            left++;
        } else {
            if (height[right] > right_max) right_max = height[right];
            else water += right_max - height[right];
            right--;
        }
    }
    return water;
}

trap([0,1,0,2,1,0,1,3,2,1,2,1])
