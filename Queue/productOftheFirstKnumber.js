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
    
    let index = this.ranges.length-k-1;
    let totalProd = this.ranges[this.ranges.length-1];
    let prodAtIndex = this.ranges[index];
    if(this.zeroIndex===index)
    {
      return totalProd
    }
    if(this.zeroIndex===-1 || this.zeroIndex<=index)
    {
      return (totalProd/prodAtIndex)
    }
    else{
      return 0;
    }
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */