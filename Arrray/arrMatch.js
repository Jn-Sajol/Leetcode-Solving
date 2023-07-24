function same(numArr, numArr2) {
    for (let i = 0; i < numArr.length; i++) {
      if (numArr.length !== numArr2.length){
        return false;
      }
        const multiply = numArr[i] * numArr[i]
        if (!numArr2.includes(multiply)) {
            return false;
        }
    }
    return true;
}

console.log(same([2, 3, 6], [9, 4, 36]));