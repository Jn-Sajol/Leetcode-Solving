var movesToStamp = function(stamp, target) {
    const sLen = stamp.length;
    const tLen = target.length;
    const blank = '?'.repeat(tLen);
    const subSet = new Set();
    const output = []
    
    for(let i = 0; i < sLen; i++) {
        for(let j = i+1; j <= sLen; j++) {
            const left = '?'.repeat(i);
            const right = '?'.repeat(sLen - j);
            const subStr = left + stamp.slice(i, j) + right;
            subSet.add(subStr)
        }
    }
    
    outerLoop: while(blank !== target) {
        for(let i = 0; i <= tLen - sLen; i++) {
            const subStr = target.slice(i, i+sLen);
            if(subSet.has(subStr)) {
                target = target.replace(subStr, '?'.repeat(sLen));
                output.push(i);
                continue outerLoop;
            }
        }
        return [];
    }
    return output.reverse()
};
movesToStamp();