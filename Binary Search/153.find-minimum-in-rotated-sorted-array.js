/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let Minimum = Infinity;
  let left = 0;
  let right = nums.length-1;
  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    if (nums[left] <= nums[mid]) {
      Minimum = Math.min(nums[left],Minimum);
      left = mid + 1;
    } else {
      Minimum = Math.min(nums[mid],Minimum);
      right = mid - 1;
    }
  }
  return Minimum;
};
// @lc code=end

