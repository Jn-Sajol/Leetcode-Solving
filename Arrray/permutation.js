/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    // Backtracking
    const used = new Set(); // Keep track of what we have used
    const path = []; // Current potiential answer array
    const res = []; // Result array to be returned
    
    const dfs = () => {
        // If path is same length as nums, we know we have an answer. Push it to res array
        if(path.length === nums.length) {
            res.push([...path]); // We use spread operator to clone since arrays are pass by reference
        }
        
      
   