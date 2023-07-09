/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var counter = init;
    return {
        increment : ()=>{
            counter++;
            return counter;
        },
        decrement : ()=>{
            counter--;
            return counter;
        },
        reset : ()=> {
            counter = init;
            return counter;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */