let arr = [5, 3, 8, 2, 1, 4];

function bubbleSort(arr: number[]): number[] {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
// console.log(bubbleSort([5, 3, 8, 2, 1, 4]));
