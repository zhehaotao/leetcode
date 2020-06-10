/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || !grid.length) return 0;
  const width = grid[0].length;
  const depth = grid.length;
  const queue = [];
  let output = 0;
  for (let i = 0; i < depth; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] == 1) {
        output++;
        queue.push({i:i,j:j})
        while (queue.length) {
          const cur = queue.shift();
          if (cur.i > 0 && grid[cur.i-1][cur.j] == 1) {
            queue.push({i:cur.i-1,j:cur.j});
            grid[cur.i-1][cur.j] = 0;
          }
          if (cur.i < depth - 1 && grid[cur.i+1][cur.j] == 1) {
            queue.push({i:cur.i+1,j:cur.j});
            grid[cur.i+1][cur.j] = 0;
          }
          if (cur.j > 0 && grid[cur.i][cur.j-1] == 1) {
            queue.push({i:cur.i,j:cur.j-1});
            grid[cur.i][cur.j-1] = 0;
          }
          if (cur.j < width - 1 && grid[cur.i][cur.j+1] == 1) {
            queue.push({i:cur.i,j:cur.j+1});
            grid[cur.i][cur.j+1] = 0;
          }
        }
      }
    }
  }
  return output; 
};
// @lc code=end

