function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) minIndex = j;
    }

    if (i !== minIndex) swap(arr, i, minIndex);
  }
}

const swap = (arr, index1, index2) =>
  ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]) &&
  console.log("swap");

const nums = [0, 100, 12, 3, -1];

insertionSort(nums);

console.log(nums);
