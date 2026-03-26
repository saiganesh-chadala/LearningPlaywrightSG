function add(a,b,c,d){
    return a+b+c+d;
}

let num = [2,5,9,4];
console.log(add(...num));

//---------------
function hasError(...codes){
    return codes.some(c => c>400)
}

let responseCodes = [203,405,200];

console.log(hasError(...responseCodes));

console.log('---------------------');

function getStatus(code){
    if(code>=200 && code <300) return "Sucessful.";
    if(code>=400 && code <500) return "Client Error";
    if(code>= 500) return "Server Error";
}

console.log(getStatus(404));
console.log(getStatus(204));
console.log(getStatus(505));

console.log('---------------------');


//returns nothing .. undefined
function logtest(name){
    console.log(`the running test is ${name} `)
}

logtest("API");

console.log('---------------------');

//returning multiple values via array or object

function aa(){
    return [1,2,3,4];
    // return {name: 'Sai Ganesh'};  //object
}
console.log(aa());