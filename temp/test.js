var threeSum = function(nums) {
  var result = [];
  // 排序
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length / 2; i++) {
    var j = i + 1;
    var k = nums.length - 1;
    if (i > 0 && nums[i] === nums[i-1]) {
      continue;
    }
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        if (j < k && nums[j] === nums[j-1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        if (j < k && nums[k] === nums[k+1]) {
          k--;
        }
      } else {
        rsult.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j-1]) {
          j++;
        }
        while(j < k && nums[k] === nums[k+1]) {
          k--;
        } 
      }
    }
  }
  return result;
}