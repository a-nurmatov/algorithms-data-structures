function search(arr, elem) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElem = arr[middle];
    if (currentElem === elem) return middle;
    else if (currentElem > elem) max = middle - 1;
    else min = middle + 1;
  }

  return -1;
}

console.log(search([1, 2, 3], 2));
