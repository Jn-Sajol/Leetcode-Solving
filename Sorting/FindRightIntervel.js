var findRightInterval = function(intervals) {
    let res = [];
    let end = intervals.length;
    let map = new Map();
    let a = [];
    intervals.forEach((el, index) => {
        map.set(el[0], index);
        a.push(el[0]);
    });
    a.sort((a, b) => a - b);

    for (let i = 0; i < end; i++) {
        let value = search(a, 0, end -1, intervals[i][1]);
        if (value === undefined) {
            res.push(-1);
        } else {
            res.push(map.get(value));
        }
    }
    return res;
};

function search(arr, start, end, val) {
    let ans = undefined;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] >= val) {
            ans = arr[mid];
            end = mid - 1;
        } else {
            start = mid + 1;
        }        
    }

    return ans;
}
findRightInterval();