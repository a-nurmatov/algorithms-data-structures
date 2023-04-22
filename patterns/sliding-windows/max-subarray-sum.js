function maxSubarraySum(nums, count) {
  // add whatever parameters you deem necessary - good luck!
  if (nums.length < count) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < count; i++) tempSum += nums[i];
  maxSum = tempSum;
  for (let i = count; i < nums.length; i++) {
    tempSum = tempSum - nums[i - count] + nums[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}
