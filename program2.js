const decodeTheRing = function (s, p) {

    // write your code here
    const memo = new Map();

    const isMatch = (i, j) => {
      // Create unique key for memoization
      const key = `${i},${j}`;
      
      // Return cached result if available
      if (memo.has(key)) return memo.get(key);
      
      // Base cases
      if (j === p.length) return i === s.length;
      if (i > s.length) return false;
      
      let result = false;
      
      // Handle star pattern
      if (p[j] === '*') {
          // Star can match zero characters
          result = isMatch(i, j + 1);
          
          // Star can match one or more characters
          if (i < s.length) {
              result = result || isMatch(i + 1, j);
          }
      }
      // Handle question mark or exact character match
      else if (i < s.length && (p[j] === '?' || p[j] === s[i])) {
          result = isMatch(i + 1, j + 1);
      }
      
      // Cache and return result
      memo.set(key, result);
      return result;
  };
  
  return isMatch(0, 0);


  };
  
  module.exports = decodeTheRing;