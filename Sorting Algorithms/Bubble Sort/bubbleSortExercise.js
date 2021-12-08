const bubbleSort = (arr) => {
  for(let i = arr.length; i > 0; i--) {
    let swaps = false;

    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swaps = true;
      }
    }

    if(!swaps) break;
  }

  return arr;
}

console.log(
  bubbleSort([10, 68, 5, 15, 98, 18, 315, 1100, -59, -5, 49, 57, 0, 8])
);
