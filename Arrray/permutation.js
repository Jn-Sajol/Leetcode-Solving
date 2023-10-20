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
        
        // Every DFS we loop all numbers
        for(let i = 0; i < nums.length; i++) {
            // We can skip these numbers if they have been used
            if(used.has(nums[i])) continue;
            
            // Add to our potienial answer array and make it used by adding to used set
            path.push(nums[i]);
            used.add(nums[i]);
            
      
        }
        
    }
    
    // Start DFS
    // All variables are global, no need to pass in anything
    dfs();
    
    return res;
}