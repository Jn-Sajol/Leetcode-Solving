const wordBreak = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return false;
    const set = new Set(wordDict);
  
    // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
    // After 'cats' and 'ca', it will become 'andog', 'tsandog'
    // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
    const visited = new Set();
    const q = [0];
  
    while (q.length) {
      const start = q.shift();

  };
  