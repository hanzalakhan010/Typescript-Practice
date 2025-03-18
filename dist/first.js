"use strict";
function sum(arr) {
    let sum = 0;
    for (let ele of arr) {
        sum += ele;
    }
    return sum;
}
function processData(param) {
    if (typeof param == 'string') {
        return param.toLowerCase();
    }
    else {
        return sum(param);
    }
}
function formatUser(user) {
    return `User:${user.name} is ${user.age} years old`;
}
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
// function reverseArray(arr:any[]):any[]{
//     return arr.reverse()
// }
function reverseArray(arr) {
    return arr.reverse();
}
function discountCalculator(product) {
    if (product.discount) {
        product.price = (product.price * product.discount);
    }
    return product;
}
function filterNumbers() {
}
