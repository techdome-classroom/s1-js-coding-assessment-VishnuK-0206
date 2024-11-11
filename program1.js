const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const exploreIsland = (row, col) => {
      if (row < 0 || row >= rows || col < 0 || col >= cols || 
          grid[row][col] === 'W' || grid[row][col] === 'V') {
          return;
      }
      
      grid[row][col] = 'V';
      exploreIsland(row - 1, col); 
      exploreIsland(row + 1, col); 
      exploreIsland(row, col - 1); 
      exploreIsland(row, col + 1); 
  };

  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          if (grid[row][col] === 'L') {
              exploreIsland(row, col);
              islandCount++;
          }
      }
  }

  return islandCount;

};

module.exports = getTotalIsles;