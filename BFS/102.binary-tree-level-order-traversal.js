/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function(root) {
  if (!root) return [];
  var queue = [root];
  var output = [];
  while (queue.length > 0){
    var curLevel = [];
    var len = queue.length;
    for (var i = 0; i < len; i++){
      var curValue = queue.shift();;
      if (curValue) curLevel.push(curValue.val);
      else continue;
      if (curValue.left) queue.push(curValue.left);
      if (curValue.right) queue.push(curValue.right);    
    }
    output.push(curLevel);
  }
  return output;
};
// @lc code=end

