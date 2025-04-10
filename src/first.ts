function sum(arr: number[]): number {
  let sum: number = 0;
  for (let ele of arr) {
    sum += ele;
  }
  return sum;
}
function processData(param: string | number[]) {
  if (typeof param == "string") {
    return param.toLowerCase();
  } else {
    return sum(param);
  }
}

interface User {
  name: string;
  age: number;
}
function formatUser(user: User) {
  return `User:${user.name} is ${user.age} years old`;
}

function isEven(num: number): boolean {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

// function reverseArray(arr:any[]):any[]{
//     return arr.reverse()
// }
function reverseArray<T>(arr: T[]) {
  return arr.reverse();
}

// console.log(reverseArray<number>([1,2,3,4]))
interface Product {
  name: string;
  price: number;
  discount: number | null;
}
function discountCalculator(product: Product): Product {
  if (product.discount) {
    product.price = product.price * product.discount;
  }
  return product;
}
function filterNumbers(param: (string | number)[]):number[] {
  let numArr: number[] = [];
  for (let ele of param) {
    if (typeof ele == "number") {
      numArr.push(ele);
    }
  }
  return numArr
}

function mergeObject<T,U>(T:object,U:object){
    return Object.assign(T,U)
}
console.log(mergeObject<object,object>({a:1},{b:3}))