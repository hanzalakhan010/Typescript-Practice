function sum(arr:number[]):number{
    let sum:number = 0
    for(let ele of arr){
        sum+=ele
    }
    return sum
}
function processData(param:string|number[]){
    if (typeof param == 'string'){
        return param.toLowerCase()
    }
    else{
        return sum(param)
    }

}

interface User{
    name :string,
    age:number
}
function formatUser(user:User){
    return `User:${user.name} is ${user.age} years old`

}