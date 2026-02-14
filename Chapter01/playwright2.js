// var , let , const

//var -- Function scoped

var a = 10; //Global scope

console.log(a);

//Definition of function
function printHello(){
    console.log("Hello..Testing with Playwright!!")
    var a = 20; //Local scope
    console.log(a);
    if(true){
        var a = 30; //Reassigning the value of a in the same scope
        console.log(a);
    }
    console.log("var  -->",a);
}

//calling the function
printHello();


console.log("----------------------------------------------");
let b = 10; //Global scope

console.log(b);     
//Definition of function
function printHello1(){
    console.log("Hello..Testing with Playwright!!")
    let b = 20; //Local scope
    console.log(b);
    if(true){
        let b = 30; //Creating a new variable b in the block scope
        console.log(b);
    }
    console.log("let  -->",b);
}
 printHello1();

//let does not allow to reassign the value of a variable in the same scope
// let b = 40; //SyntaxError: Identifier 'b' has already been declared

console.log("----------------------------------------------");
const pi = 3.14; //Global scope
console.log(pi);    
pi = 3.14159; //cannot reassign the value of a constant variable


