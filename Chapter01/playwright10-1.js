//Arrow functions in ES6

const greet1 = function(name1){
    return `hi..${name1}`
}

//so to use arrow function , have to remove function , return keywords and braces

const greet2 = (name2) => `hi..${name2}`

console.log("normal function" , greet1('sai'));
console.log("arrow function" , greet2('sai'));
// above both are same 
console.log("-----------------------------------------")

//zero function generally works with single line

const doubleNum = n => n *2;
console.log(doubleNum(20));

console.log("-----------------------------------------")

//no parameters required

const getEnv = () => "Staging"
console.log(getEnv());

console.log("-----------------------------------------")

//multi lines -- needs curly braces and return

const getResult = (score) => {
    if (score>=70) return "pass";
    return "fail"
}

console.log(getResult(80));
console.log(getResult(69));





