/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    while (left < mid && nums[left] == nums[mid]) {
      left += 1;
    }
    if (nums[mid] == target) return true;
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) right = mid-1;
      else left = mid+1;
    }
    else {
      if (nums[mid] <= target && target <= nums[right]) left = mid+1;
      else right = mid-1;
    }
  }
  return false;
};
// @lc code=end

