/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  const queue = [root];
  const output = [];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      var curNode = queue.shift();
      if (!curNode) continue;
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    output.push(curNode.val);
  }
  return output;  
};
// @lc code=end

