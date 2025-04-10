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
            else if (arr[i - 1] < arr[i] && arr[i] == arr[i + 1]) {
                pos.push(i);
                peaks.push(arr[i]);
            }
            else if (arr[i - 1] == arr[i] && arr[i] < arr[i + 1]) {
                pos.push(i);
                peaks.push(arr[i]);
            }
        }
    }
    return { pos, peaks };
}
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))
console.log(pickPeaks([
    -2, 6, 2, -2, 0, 12, -2, 15, 15, 9, 10,
    -2, -3, -3, -4, 3, 3, 12, 9, 2, -1, 8,
    4, 11, 1, 6, 12, 6, 4, -3, 7, -4, 0,
    3, 7, -3, 13, 0, 10, -2, 5, -3, 13, 9,
    -3, 14, 14
]));
