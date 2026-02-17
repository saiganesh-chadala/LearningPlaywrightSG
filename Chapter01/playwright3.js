console.log(a); //ReferenceError: a is not defined
var a=10;
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

function getUserStatus(){
    console.log(status_code);
    var status_code="Active"
    console.log(status_code)
}
getUserStatus(); //undefined Active

// In the above function, the variable 'status_code' is hoisted to the top of the function scope, but it is initialized with 'undefined' until the line where it is assigned the value "Active". 
// Therefore, when we try to log 'status_code' before its initialization, it outputs 'undefined'. After the assignment, it outputs "Active".

console.log("----------------------------------------------");

console.log(); //ReferenceError: name is not defined