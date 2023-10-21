function threeSum(nums) {
	const results = []

	// obviously irrelevant if we don't have at least 3 numbers to play with!
	if (nums.length < 3) return results

	// having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
	nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	
};