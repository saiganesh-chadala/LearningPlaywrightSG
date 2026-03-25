//Immediately Invoked Function expression
//they dont need to be called

function name1() {
    console.log("Hi...")
}
name1();

//IIFE

(function (){
    console.log("Hi....")}) ();



(function (){
    console.log("staging")}) ();




(() => {
    console.log("staging")
}) ();

console.log("------------Default paarmeters-------------")
///Default parameters

function retry(test , max_retries = 3 , wait_time = 1000){
    console.log(`Retrying ${test} upto ${max_retries} times with ${wait_time}ms apart `)
}

retry('Login');
retry('API_Test', 5);
retry('Logout' , 4 , 500);


console.log("------------Rest paarmeters using spread-------------")

function add(a,b,c){
    return a+b+c;
}
let num = [1,2,3]

console.log('sum is :', add(...num)); // same as add(1,2,3)