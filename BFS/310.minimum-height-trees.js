/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

var findMinHeightTrees = function(n, edges) {
  const graph = [];
  let leaves = [];
  let newLeaves = [];
  if (n == 1) return [0];
  for (let i = 0; i < n; i++) {
    graph.push(new Set());
  }
  for (let [v1,v2] of edges) {
    graph[v1].add(v2);
    graph[v2].add(v1);
  }
  for (let i = 0; i < n; i++) {
    if (graph[i].size == 1) {
      leaves.push(i);
    }
  }
  while (n > 2) {
    n = n - leaves.length;
    newLeaves = [];
    for (let i of leaves) {
      const j = graph[i].values().next().value;
      graph[j].delete(i);
      if (graph[j].size == 1) newLeaves.push(j);
    }
    leaves = newLeaves;
  }
  return leaves;  
};
// @lc code=end

