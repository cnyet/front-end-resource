/**
 * 最短无序连续子数组:
 * 给你一个整数数组 nums ，你需要找出一个连续子数组 ，如果对这个子数组进行升序排序
 * 那么整个数组都会变为升序排序
 * 
 */
// nums = [2,6,4,8,10,9,15] => 5
// nums = [1,2,3,4] => 0
// [1,3,2,4,5]
// [1,3,2,2,2]
// [1,2,3,3,3]
var findUnsortedSubarray = function(nums) {
  var len = nums.length;
  var i = 0, j = len;
  while (i < j) {
    if (nums[i] > nums[j-1]) {
      break;
    }
    if (i > 0 && nums[i-1] > nums[i]) {
      i--;
      if (nums[j] > nums[j+1]) {
        j++;
      }
      break;
    }
    if (nums[j] > nums[j+1]) {
      j++;
      break;
    }
    i++;
    j--;
  }
  if (i >= j) {
    return 0;
  }
  if (nums[i] === nums[j-1]) {
    if (nums[i] > nums[i-1]) {
      i--;
    }
    if (nums[j-1] > nums[j]) {
      j++;
    }
    return 0;
  }
  if (nums[i] > nums[j-1]) {
    if (nums[j] === nums[j+1]) {
      j++;
    } else {
      j--;
    }
  }
  if (j !== nums.length) {
    j++;
  }
  console.log(nums.slice(i, j));
  return nums.slice(i, j).length;
};

var nums = [1,3,2,2,2]
console.log(findUnsortedSubarray(nums));