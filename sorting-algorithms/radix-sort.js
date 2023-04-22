function countDigits(num) {
  return Math.floor(Math.log10(num)) + 1;
}

function maxDigitsAmount(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, countDigits(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = maxDigitsAmount(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = nums[i] % 10;
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
