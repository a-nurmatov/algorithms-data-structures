// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     console.log("=================");
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         console.log(arr, arr[j], arr[j - 1]);
//         swap(arr, j, j - 1);
//         console.log(arr, arr[j], arr[j - 1]);
//       } else break;
//     }
//     console.log("=================");
//   }
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    for (var j = i - 1; j >= 0 && element < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = element;
  }
}

const swap = (arr, index1, index2) =>
  ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]) &&
  console.log("swap");

const nums = [100, 10, 100, 12, 3, -1];

insertionSort(nums);

console.log(nums);
