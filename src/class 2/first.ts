// let employee: [number, string, boolean?] = [1, "Khan"];
// let person: { name: string; age: number }[] = [
//   {
//     name: "hanza",
//     age: 2,
//   },
// ];

// interface Employee{
//     name:string,
//     age:number,
//     department:string,
// }
// interface Human{
//     age:number,
//     married?:boolean
// }

// type HumanBeing = Employee | Human

// let hanzala:HumanBeing = {
//    age:1,

// }

// enum Colours {
//     red = 1,
//     green = 2,
//     blue = 3
// }

// let theme:string = Colours.blue

// interface Add{
//     (a:number,b:number):number,
// }
// const  add:Add = (a:number,b:number)=> {
//     return a*b
// }
// let f = add(1,2)

interface Process{
    (param:number[]|string):number|string
}

function sumArr(arr: Array<number>) {
  let total: number=0;
  for (let ele of arr) {
    total += ele;
  }
  return total;
}

const processsData:Process = function (param: number[] | string){
  if (typeof param == "string") {
    return param.toLowerCase();
  } else {
    return sumArr(param);
  }
}
console.log(processsData("HANZALA"));
console.log(processsData([1, 2, 3, 4, 6]));
