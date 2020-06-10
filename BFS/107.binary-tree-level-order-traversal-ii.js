/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  let queue = [root];
  let output = [];
  while (queue.length > 0){
    let len = queue.length;
    let curLevel = [];
    for (let i = 0; i < len; i++){
      let curNode = queue.shift();
      curLevel.push(curNode.val);
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    output.unshift(curLevel);
  }
  return output;
};
// @lc code=end

