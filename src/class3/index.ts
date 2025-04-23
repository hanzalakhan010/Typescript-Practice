let firstElement = <T>(arg: T[]): T => {
  return arg[0];
};
// console.log(firstElement([1,2,3,4]))
// console.log(firstElement(['a','b','c']))
// console.log(firstElement([undefined,'b','c']))
// console.log(firstElement([1,'b','c']))

interface Person {
  name: string;
  age: number;
}
interface Address {
  street: string;
  city: string;
}

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

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
function modifyProperty<Type, Key extends keyof Type, Value>(
  obj: Type,
  key: Key,
  value: Value
) {
  return { ...obj, [key]: value };
}

let x = { a: 1, b: 3, c: 2 };

// console.log("🚀 ~ getProperty:", getProperty(x, "a"));

x = modifyProperty(x, "a", 10);

// console.log(x);

// console.log("🚀 ~ getProperty:", getProperty(x, "a"))


function parseJson(rawJson:string):object|null{
    try{
        let json = JSON.parse(rawJson)
        return  json
    }
    catch{
        return null
    }
}
// console.log(parseJson('{"name":"hanzala}'))


function groupBy(objects:Object[],key:string){
    let group = {}

    objects.forEach((object)=>{
        // if (group?.[key]){

        // }
    })


}