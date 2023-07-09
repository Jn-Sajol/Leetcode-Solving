var expect = function(val) {
    const toBe= (x) =>{
        if(val===x){
            return true;
        }else{
             throw new Error('Not Equal')
        }
    };
     const notToBe= (x) =>{
       if(val !== x){
        return true
    } else {
        throw new Error("Equal")
    }
    }
    return{
        toBe,
        notToBe
    }
};


 expect(5).toBe(5); // true
 expect(5).notToBe(5); // throws "Equal"

 /**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return  {
        toBe: function(another){
            if(another===val)
             return true
            else throw new Error("Not Equal");
        },
        notToBe: function(another){
            if(another!==val)
            return  true
            else throw new Error("Equal");
        }
    }
 };
 
 /**
  * expect(5).toBe(5); // true
  * expect(5).notToBe(5); // throws "Equal"
  */