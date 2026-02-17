console.log(a); //ReferenceError: a is not defined
var a = 10;
console.log(a); //10

console.log("----------------------------------------------");

// behind the scenes, JavaScript moves all the variable declarations to the top of their scope.
// This is known as hoisting. However, only the declarations are hoisted, not the initializations. 
// So, when we try to access 'a' before its declaration, it results in a ReferenceError because 'a' is not defined at that point in the code.

var greeting;  //hoisted with undefined
console.log(greeting); //undefined
greeting = "Hello, Playwright!"; //initialization
console.log(greeting); //Hello, Playwright!


console.log("----------------------------------------------");

function getUserStatus() {
    console.log(status_code);
    var status_code = "Active"
    console.log(status_code)
}
getUserStatus(); //undefined Active

// In the above function, the variable 'status_code' is hoisted to the top of the function scope, but it is initialized with 'undefined' until the line where it is assigned the value "Active". 
// Therefore, when we try to log 'status_code' before its initialization, it outputs 'undefined'. After the assignment, it outputs "Active".

console.log("----------------------------------------------");

//TDZ for "score" starts here
// console.log(score);
// score = 100;
// typeof score; //ReferenceError: Cannot access 'score' before initialization
//TDZ for "score" ends here
let score = 100;
console.log(score); //100

console.log("----------------------------------------------");

let s = 100;

if (true) {
    //TDZ starts here
    // console.log(s);
    let s = 200;
    console.log(s);
}
console.log(s);