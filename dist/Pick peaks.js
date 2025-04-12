"use strict";
function pickPeaks(arr) {
  let pos = [];
  let peaks = [];
  // arr = arr.reverse();
  if (arr) {
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
        pos.push(i);
        peaks.push(arr[i]);
      }
      else if (arr[i-1]<arr[i] && arr[i] == arr[i+1]){
        pos.push(i);
        peaks.push(arr[i]);
        console.log(i)
      }
    }
  }
  return { pos, peaks };
}
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))
console.log(
  pickPeaks([
    1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
  ])
);
