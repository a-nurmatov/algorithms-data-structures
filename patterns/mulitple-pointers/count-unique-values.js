function countUniqueValuesV1(arr) {
  // amount of unique values needs to be found

  // 1) create cache object to save numbers
  const cache = {};
  let count = 0;
  // 2) create two pointer variables
  let left = 0;
  let right = arr.length - 1;

  // 3) use while loop to iterate over value
  while (left <= right) {
    const num1 = arr[left];
    const num2 = arr[right];

    if (!cache[num1]) {
      cache[num1] = 1;
      count++;
    }

    if (!cache[num2]) {
      cache[num2] = 1;
      count++;
    }

    left++;
    right--;
  }

  return count;
}

function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }

  return ++left;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-1, 0, 1, 2, 3]));
