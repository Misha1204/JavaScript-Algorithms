// Binary Search - მოქმედებს მხოლოდ სორტირებული სიების შემთხვევაში.

const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (arr[middle] > val) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === val ? middle : -1;
};

console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 50));
