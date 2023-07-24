                                            /**
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    if (!senate.includes('R')) {
        return 'Dire';
    } else if (!senate.includes('D')) {
        return 'Radiant';
    }
    let arr = senate.split('');
    while (arr.includes('R') && arr.includes('D')) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'R') {
                if (arr.indexOf('D', i+1) !== -1) {
                    arr[arr.indexOf('D', i+1)] = 0;
                } else if (arr.indexOf('D') !== -1) {
                    arr[arr.indexOf('D')] = 0;
                }
            } else if (arr[i] === 'D') {
                if (arr.indexOf('R', i+1) !== -1) {
                    arr[arr.indexOf('R', i+1)] = 0;
                } else if (arr.indexOf('R') !== -1) {
                    arr[arr.indexOf('R')] = 0;
                }
            }
        }
    }
    return arr.includes('R') ? 'Radiant' : 'Dire';
};
predictPartyVictory();