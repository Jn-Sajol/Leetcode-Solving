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
  if(num===0)
  {
    this.ranges.push(0)
    this.zeroIndex = this.ranges.length-1;
    this.total=1;
    return;
  }
  this.total = this.total*num
  this.ranges.push(this.total);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if(this.ranges.length===1)
    {
      return this.total
    }
    if(k===this.ranges.length)
    {
      if(this.zeroIndex===-1)
      {
        return this.total
        
      }
      else{
        return 0
      }
    }
   