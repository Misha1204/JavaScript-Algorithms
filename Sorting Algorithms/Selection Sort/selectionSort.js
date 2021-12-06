const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallestValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestValueIndex]) {
        smallestValueIndex = j;
      }
    }

    if (i !== smallestValueIndex) {
      [arr[i], arr[smallestValueIndex]] = [arr[smallestValueIndex], arr[i]];
    }
  }

  return arr;
};

console.log(
  selectionSort([10, 68, 5, 15, 98, 18, 315, 1100, -59, -5, 49, 57, 0, 8])
);
