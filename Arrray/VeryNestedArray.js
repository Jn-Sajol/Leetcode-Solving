/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    // Loop n times, flattening one-level at a time
    for (let k = n; k > 0; k--) {
        let alreadyFlat = true;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let sal = arr[i].length;
                arr.splice(i, 1, ...arr[i]);
                // Skip to the end of the elements we just added
                i += sal - 1;
                alreadyFlat = false;
            }
        }
        // If the array is already flat, we can return early
        if (alreadyFlat) return arr; 
    }
    return arr;
};
flat();