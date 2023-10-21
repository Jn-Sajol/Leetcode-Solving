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

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let j = i + 1

		let k = nums.length - 1

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]
			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--
				j++
				k--
			} else if (sum < target) {
				j++
			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};