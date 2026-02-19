let age = 10;
let name = "John";
let isStudent = true;
let pi = 3.14;
let name2 = 'Sai Ganesh';

//template literals
let greeting = `Hello , my name is ${name2} and my age is ${age}`;
console.log(greeting);

let math = `2+2=${2+2}`;
console.log(math);

console.log("--------------------------------------");

// if you want to store path
let path = "C:\\Users\\SaiGanesh\\Documents\\Playwright"; 
// have to give double backslash to escape the backslash character
console.log(path);

console.log("--------------------------------------");

let item = null
console.log(item); // null
let item2;
console.log(item2); // undefined

console.log("--------------------------------------");

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == 0); // false
console.log(null ==""); // false
console.log(null == false); // false

console.log(undefined == 0); // false
console.log(undefined == ""); // false
console.log(undefined == false); // false

console.log("--------------------------------------");

console.log(5==5); // true
console.log(5== '5'); // true

console.log( null == undefined); // true
console.log( null === undefined); // false

