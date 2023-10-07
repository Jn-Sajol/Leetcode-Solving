

var crackSafe = function (n, k) {
    if (n === 1 && k === 1) return '0'
    const visited = new Set()
    const seq = []
    const prefix = '0'.repeat(n - 1)
    dfs(prefix, seq, visited, k)
    seq.push(prefix)
    return seq.join('')
}

const dfs = (prefix, seq, visited, k) => {
  for (let i = 0; i < k; i++) {
    const combination = prefix + i.toString()
    if (visited.has(combination)) continue
    
    // If the current combination hasn't been visited add it to the visited set
    // so we do no revisit it.
    visited.add(combination)
    
    // Create a new prefix using the current combination
    // and continue the depth first traversal.
    dfs(combination.slice(1), seq, visited, k)
    
    // Add the last element of the visited combination to the sequence.
    seq.push(i)
  }
}