
var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++){
      if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
          return s.indexOf(s[i])
      }
  }
  return -1;
};

firstUniqChar()

/** First Unique Character in a String
Easy
8.3K
266
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters. */