const array = [2, 5, 1];

const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }

  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // Left
    quickSort(arr, left, pivotIndex - 1);

    // Right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};
console.log(quickSort(array));
