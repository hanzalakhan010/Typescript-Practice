"use strict";
// let employee: [number, string, boolean?] = [1, "Khan"];
// let person: { name: string; age: number }[] = [
//   {
//     name: "hanza",
//     age: 2,
//   },
// ];
function sumArr(arr) {
    let total = 0;
    for (let ele of arr) {
        total += ele;
    }
    return total;
}
const processsData = function (param) {
    if (typeof param == "string") {
        return param.toLowerCase();
    }
    else {
        return sumArr(param);
    }
};
console.log(processsData("HANZALA"));
console.log(processsData([1, 2, 3, 4, 6]));
