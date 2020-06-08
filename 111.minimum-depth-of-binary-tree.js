/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  let depth = 1;
  const queue = [root];
  while (queue.length > 0){
    const len = queue.length;
    for (let i = 0; i < len; i++){
      const curNode = queue.shift();
      if (!curNode.left && !curNode.right) return depth;
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    depth++;
  }
  return depth;
};
// @lc code=end

