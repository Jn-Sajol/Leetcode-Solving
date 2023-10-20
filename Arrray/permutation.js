
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
            
            // After adding, we call DFS again. DFS will continue till we hit the base case above
			// Think of this as just continuing down a path till we have an answer
            dfs();
            path.pop();
            used.delete(nums[i])
        }
        
    }
    dfs();
    
    return res;
}
permute()

//efficient way
const permute = (nums) => {
    const res = [];

    const dfs = (index) => {
        if (index === nums.length) {
            res.push([...nums]);
            return;
        }

        for (let i = index; i < nums.length; i++) {
            // Swap elements at indices 'index' and 'i'
            [nums[index], nums[i]] = [nums[i], nums[index]];
            dfs(index + 1);
            // Swap back to backtrack
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    };

    dfs(0);
    return res;
};

const input = [1, 2, 3]; // Replace this with your input array
const result = permute(input);
console.log(result);

/**46. Permutations
Medium
18.1K
292
Companies
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique. */