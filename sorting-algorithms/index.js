const swap = (arr, index1, index2) =>
  ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        swap(arr, j, j + 1);
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(array, i, min);
    }
  }
  console.log(array);

  return array;
}

const arr = [22, 2, 4, -3, 9];

// console.log(bubbleSort(arr), "bubble sort");
console.log(selectionSort(arr), "selection sort");
