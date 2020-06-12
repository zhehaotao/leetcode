/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
var largestValues = function(root) {
  if (!root) return [];
  const queue = [root];
  const output = [];
  while (queue.length) {
    const len = queue.length;
    let maxValue = queue[0].val;
    for (let i = 0; i < len; i++) {
      const curNode = queue.shift();
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
      if (curNode.val > maxValue) maxValue = curNode.val;
    }
    output.push(maxValue);
  }
  return output;
};
// @lc code=end

