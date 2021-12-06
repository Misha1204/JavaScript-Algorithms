const bubbleSort2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

// console.log(bubbleSort2([5, 64, 1, 48, 10, 39, 648, 94]));

const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
};

// console.log(bubbleSort([5, 64, 1, 48, 10, 39, 648, 94]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
