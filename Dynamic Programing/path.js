/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
     let n = obstacleGrid[0].length;
     let memo = new Map();
   if (m === 1 && n === 1) {
       if (obstacleGrid[0][0] === 1) {
         return 0;
       }
       return 1;
     }
   
   };