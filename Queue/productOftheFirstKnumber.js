var ProductOfNumbers = function() {
    this.ranges = new Array();
    this.total = 1;
    this.zeroIndex = -1;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  if(this.ranges.length===0)
  {
    if(num!==0)
    {
      this.total = num;
    }
    else{
      this.zeroIndex=0
    }
    this.ranges.push(num)
    return;
  }
 