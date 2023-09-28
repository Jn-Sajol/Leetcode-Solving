var pathSum = function(root, sum) {
    if (root === null) return [];
    const res = [];
    backtrack(root, sum, res, []);
    return res;
  };
  
  function backtrack(root, sum, res, temp) {
    if (root === null) return;
    if (root.left === null && root.right === null && sum === root.val) {
      return res.push([...temp, root.val]);  
    }
    temp.push(root.val);
    backtrack(root.left, sum - root.val, res, temp);
  
    backtrack(root.right, sum - root.val, res, temp);
    temp.pop();
  }