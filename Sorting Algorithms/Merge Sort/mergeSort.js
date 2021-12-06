const arr = [
  55, 2, 15, 6, 7, 80, 98, 48, 4, 6454, 787, 136, 4687, 9484, 1510, 15, 1, 648,
  787, 97848, 1654, 654, 13546, 20, 63584, 310, 203, 2031351, 16548579,
  16513246987, 78946546, 3521, 35496879,
];

// Merge two sorted arrays
const merge = (arr1, arr2) => {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const middlePoint = Math.floor(arr.length / 2);
  let leftArray = mergeSort(arr.slice(0, middlePoint));
  let rightArray = mergeSort(arr.slice(middlePoint));

  return merge(leftArray, rightArray);
};

console.log(mergeSort(arr));
