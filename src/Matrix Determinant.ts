// function determinant(m:number[][]) {
//     let n = m.length
//     // return the determinant of the matrix passed in
//     if (m.length == 1){
//         return m[0][0]
//     }
//     else if (m.length == 2){
//         return (m[0][0]*m[1][1])- (m[1][0]*m[1][1])
//     }
//     else if (m.length >= 3 ){
//         let det = 0
//         for (let i = 0;i< n;i++){
//             det+= (-1*i)*(determinant())
//         }
//     }
//   };

let arr = [
    [2,4,2],
    [3,1,1],
    [1,2,0]]
let minors = []

for (let i = 1;i<arr.length;i++){
    minors.push([arr.slice(i+1)])
}