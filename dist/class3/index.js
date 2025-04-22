"use strict";
let firstElement = (arg) => {
    return arg[0];
};
// // interface personDetails
// function merge<P extends Person, A extends Address>(
//   person: P,
//   addr: A
// ): Person & Address {
//   return Object.assign(person, addr);
//   //   return { ...person, ...addr };
// }
// console.log(
//   merge({ name: "Hanzala", age: 19 }, { street: "xyx", city: "khi" })
// );
function getProperty(obj, key) {
    return obj[key];
}
function addProperty(obj, key, value) {
    return Object.assign(Object.assign({}, obj), { [key]: value });
}
let x = { a: 1, b: 3, c: 2 };
console.log("🚀 ~ getProperty:", getProperty(x, "a"));
x = addProperty(x, 'z', 10);
console.log(x);
// console.log("🚀 ~ getProperty:", getProperty(x, "z"));
