const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const exploreIsland = (row, col) => {
      // Check bounds and if current cell is water or already visited
      if (row < 0 || row >= rows || col < 0 || col >= cols || 
          grid[row][col] === 'W' || grid[row][col] === 'V') {
          return;
      }
      
      // Mark current landmass as visited
      grid[row][col] = 'V';
      
      // Explore adjacent cells (up, down, left, right)
      exploreIsland(row - 1, col); // up
      exploreIsland(row + 1, col); // down
      exploreIsland(row, col - 1); // left
      exploreIsland(row, col + 1); // right
  };

  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          // If we find an unvisited landmass, explore it and increment count
          if (grid[row][col] === 'L') {
              exploreIsland(row, col);
              islandCount++;
          }
      }
  }

  return islandCount;

};

module.exports = getTotalIsles;