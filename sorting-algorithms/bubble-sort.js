// function bubbleSort(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
//     }
//   }
// }

function insertionSort(arr) {
  let noSwaps;
  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) noSwaps = false || swap(arr, j, j + 1);
    }
    if (noSwaps) break;
  }
}

const swap = (arr, index1, index2) =>
  ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]) &&
  console.log("swap");

const nums = [100, 2, 9, 10, 12];

insertionSort(nums);

console.log(nums);

module.exports = { swap };
