var Skiplist = function() {
    this.skiplist = new Map()
};

/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function(target) {
    return this.skiplist.get(target) > 0
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(num) {
    this.skiplist.set(num, (this.skiplist.get(num) + 1) || 1)
};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(num) {
    if (this.skiplist.get(num) > 0) {
        this.skiplist.set(num, (this.skiplist.get(num) - 1))
        return true
    } 
    return false
}

/** 
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */