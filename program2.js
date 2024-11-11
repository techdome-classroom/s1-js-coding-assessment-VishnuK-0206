const decodeTheRing = function (s, p) {

    // write your code here
    const memo = new Map();

    const isMatch = (i, j) => {
      const key = `${i},${j}`;
      
      if (memo.has(key)) return memo.get(key);
      
      if (j === p.length) return i === s.length;
      if (i > s.length) return false;
      
      let result = false;
      
      if (p[j] === '*') {
          result = isMatch(i, j + 1);
          
          if (i < s.length) {
              result = result || isMatch(i + 1, j);
          }
      }

      else if (i < s.length && (p[j] === '?' || p[j] === s[i])) {
          result = isMatch(i + 1, j + 1);
      }
      
      memo.set(key, result);
      return result;
  };
  
  return isMatch(0, 0);


  };
  
  module.exports = decodeTheRing;