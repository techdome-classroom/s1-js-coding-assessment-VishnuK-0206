const decodeTheRing = function (s, p) {

    // write your code here
    const memo = new Map();

    const isMatch=(i,j)=>{
      const key=`${i},${j}`;

      if (memo.has(key)) return memo.get(key);
    }


  };
  
  module.exports = decodeTheRing;