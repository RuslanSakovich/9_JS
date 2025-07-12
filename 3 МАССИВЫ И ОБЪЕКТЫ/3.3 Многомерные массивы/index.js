let someValues1 = ["one", "two", "three"];
let someValues2 = ["four", "five", "six"];
let someValues3 = ["seven", "eight", 'nine'];

let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays);

console.log(arrOfArrays[0][2]);
console.log(arrOfArrays[2][2]);

let doubleArrOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(doubleArrOfArrays);

console.log(doubleArrOfArrays[0][0][1]);
console.log(doubleArrOfArrays[2][2][1]);