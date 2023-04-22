function maxSubarraySumV1(arr, num) {
  if (arr.length < num) return null;
  let max = -Infinity;
  let temp = 0;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) temp += arr[i + j];
    if (temp > max) max = temp;
  }

  return max;
}

function maxSubarraySumV2(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) tempSum += arr[i];

  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySumV1([12, 23, 45, 23, -1], 3));
console.log(maxSubarraySumV2([12, 23, 45, 23, -1], 3));
