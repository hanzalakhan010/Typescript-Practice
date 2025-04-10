// function printNumber(n){
//     if(n==0) return
//     console.log(n)
//     printNumber(n-1)
// }
// printNumber(10)

const { isReturnStatement } = require("typescript");

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

const multiply = (multiplier) => (n) => multiplier * n;

const double = multiply(2);
const triple = multiply(3);

console.log(double(10));
console.log(triple(10));


