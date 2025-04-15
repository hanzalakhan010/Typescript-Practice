"use strict";
// function printNumber(n){
//     if(n==0) return
//     console.log(n)
//     printNumber(n-1)
// }
// printNumber(10)
// function factorial(n){
//     if (n == 0) return 1
//     if (n<0)return
//     return n * factorial(n-1)
// }
// console.log(factorial(3))
// function fib(n){
//     a = 1
//     b = 1
//     for (let i=0;i<n;i++){
//         sum = a+b
//         console.log(b)
//         temp = a
//         a = b
//         b = temp
//     }
// }
// function fib(n){
//     if (n == 0) return 0
//     if (n==1)return 1
//     console.log(n)
//     return fib(n-2) +fib(n-1)
// }
// console.log(fib(10))
// function parent(a,b){
//     c = 2
//     return ()=>{
//         console.log(a+b)
//     }
// }
// function createGreeting(greeting) {
//   return function (name) {
//     return `${greeting} ${name}`;
//   };
// }
// const sayHi = createGreeting("Hi");
// const sayHello = createGreeting("Hello");
// const result1 = sayHi("Hanzala");
// const result2 = sayHello("Hammad");
// console.log(result1);
// console.log(result2);
// const multiply = (multiplier) => (n) => multiplier * n;
// const double = multiply(2);
// const triple = multiply(3);
// console.log(double(10));
// console.log(triple(10));
const The_Mirror_Maze = (str) => {
  if (str.length <= 1) return str;
  return The_Mirror_Maze(str.slice(1)) + str[0];
};
// console.log(The_Mirror_Maze("code"));
const Fractal_Word_Builder = (word, n) => {
  if (n <= 1) return word;
  return `cat[${Fractal_Word_Builder(word, n - 1)}]cat`;
};
// console.log(Fractal_Word_Builder('cat',3))
const Nested_Sum_Explorer = (element) => {
  if (typeof element == "number") return element;
  if (Array.isArray(element) && element.length == 0) return 0;
  if (Array.isArray(element) && element.length > 0) {
    let total = 0;
    for (let ele of element) {
      if (Array.isArray(ele)) {
        total += Nested_Sum_Explorer(ele);
      } else {
        total += ele;
      }
    }
    return total;
  }
  return 0;
};
// console.log(Nested_Sum_Explorer([1, [1, [1]], 1]));
const The_Tower_of_Emotions = (emotions,tower) => {
    if (emotions.length>0) {
        return The_Tower_of_Emotions(emotions.slice(emotions.length-1))
  }
  return emotions;
};

let em = ['a','b','c']
console.log(em.slice(0))
console.log(em.slice(1))
console.log(em.slice(2))
// console.log(The_Tower_of_Emotions(["a", "b", "c"]));
