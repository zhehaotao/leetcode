/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let graph;
let visited;
let visiting;
let output;
var findOrder = function(numCourses, prerequisites) {
  graph = new Map();
  visited = new Set();
  visiting = new Set();
  output = [];

  for (let [end,start] of prerequisites) {
    if (graph.has(start)) {
      let vertices = graph.get(start);
      vertices.push(end);
      graph.set(start,vertices);
    } else {
      graph.set(start,[end]);
    }
  }
  for (let [start,vertices] of graph) {
    if (DFS(start)) {
      return [];
    }
  }
  for (let i = 0; i < numCourses; i++) {
    if (!output.includes(i)) {
      output.unshift(i);
    }
  }
  return output;
};

const DFS = (v) => {
  if (visited.has(v)) return;
  visiting.add(v);
  let vertices = graph.get(v);
  if (vertices) {
    for (let vertex of vertices) {
      if (visiting.has(vertex)) return true;
      if (visited.has(vertex)) continue;
      if (DFS(vertex)) return true;
    }
  }
  visiting.delete(v);
  visited.add(v);
  output.unshift(v);
}
// @lc code=end

