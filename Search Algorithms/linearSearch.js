// Linear Search - არასორტირებულ სიაში, რიგ-რიგობით ვამოწმებთ ყველა მნიშვნელობას.

const linearSearch = (array, val) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === val) return index;
  }

  return -1;
};

console.log(
  linearSearch(
    [
      1, 51, 31, 1, 2, 4, 8, 15, 79, 15654, 45, 65, 4, 8, 13, 46, 87, 91, 100,
      150, 135, 54, 648, 987, 613, 15, 5, 10, 64,
    ],
    31
  )
);
