var findJudge = function(n, trusts) {
    if (trusts.length == 0 && n == 1)
        return 1;
    let degreeArr = new Array(n + 1).fill(0); 

    for (let trust of trusts) {
        degreeArr[trust[0]]--; 
        degreeArr[trust[1]]++;
    }

    // Search for town judge
    for (let i = 0; i < degreeArr.length; i++)
        if (degreeArr[i] == n - 1)
            return i;

    return -1;
};
findJudge();