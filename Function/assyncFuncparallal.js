/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
      const results = [];
      let resolveCount = 0;
      let rejected = false;
  
      for (let i = 0; i < functions.length; i++) {
        functions[i]()
          .then(result => {
            if (!rejected) {
              results[i] = result;
              resolveCount++;
  
              if (resolveCount === functions.length) {
                resolve(results);
              }
            }
          })
          .catch(error => {
            if (!rejected) {
              rejected = true;
              reject(error);
            }
          });
      }
    });
  };
  
  
  /**
   * const promise = promiseAll([() => new Promise(res => res(42))])
   * promise.then(console.log); // [42]
   */