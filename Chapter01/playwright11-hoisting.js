//Hoisting 
// Function declarations are hoisted
// you can call them before tehy're defined
// Function expression and arrow fucntions are NOT hoisted

greet("Sai Ganesh");

function greet(name){
    console.log(`Hello... ${name}`)  // this will work as decalration is hoisted
}

console.log('-------------');

// sayHi('BOB');

// const sayHi = function (name){
//         console.log(`Hello... ${name}`)   // this wonr work , it will throw an error
// }

// console.log('-------------');

// Scope ikn Functions

let env = "Staging"  //global scope

function setConfig(){
    let timeout = 1000;
    console.log(env);
    console.log(timeout);
}

setConfig();
console.log(env);
// console.log(timeout); // this wont work as timeout is defined inside block scope

console.log('-------------');
//Nested Scope

function outer (){
    let x =10;

    function inner(){
        let y = 20;
        console.log(x);
    }

    inner();
    console.log(y); // outer cannot access inner's variables 
}

outer();