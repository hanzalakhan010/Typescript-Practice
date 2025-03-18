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
