//Basic function types
//1. no args no return
function greet(){
    console.log("Hello...!")
}
greet();

console.log("------------------------")

//2. with args no return
function greetByName(name){
    console.log('Hi ..', name)
}

greetByName("sai Ganesh")

console.log("------------------------")
//3. no args with return
function sayHello(){
    return "Hello.."
}

let relative = sayHello();
console.log(relative,"Relative")

console.log("------------------------")
//4. with args with return
function sunOfTwoNumbers(a , b){
    return a+b ;
}
let c1 = sunOfTwoNumbers(2,3);
let c2 = sunOfTwoNumbers(4,8);

console.log(c1);
console.log(c2);

console.log("------------------------")
//5. Function Expression

const greet2 = function (name2){
    return `Hello...${name2}!`
}
console.log(greet2("Sai Ganesh")); // this is same as below basic function

function greet1(name1){
    return `Hello...${name1}!`
}
console.log(greet1("Sai Ganesh"))