/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let graph;
let visited;
let visiting;

var canFinish = function(numCourses, prerequisites) {
  graph = new Map();
  visited = new Set();
  visiting = new Set();

  for (let [start,end] of prerequisites) {
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
      return false;
    }
  }
  return true;
};

const DFS = (v) => {
  visiting.add(v);
  let vertices = graph.get(v);
  if (vertices) {
    for (let vertex of vertices) {
      if (visited.has(vertex)) {
        continue;
      }
      if (visiting.has(vertex)) {
        return true;
      }

      if (DFS(vertex)) {
        return true;
      };
    }
  }
  visiting.delete(v);
  visited.add(v);
  return false;
}
// @lc code=end

