//Higher Order Functions

//a function that takes function as an parameter/argument or returns a function

function runWith(testfn ,  testName){
    console.log(`Starting the : ${testName}`);
    let result = testfn ();
    console.log(`Finished: ${testName} --> ${result}`);
    return result;
}

function loginPassed(){
    return "passed"
}
function dashboardFailed(){
    return "failed"
}

runWith( loginPassed , "LoginTest");
runWith( dashboardFailed , "Dashboard Test")


console.log('---------------Call Back Functions--------------');

//callback function
// a callback function is an function which is passed as an argument to another function , to be called later

function workofPW (worker , callback){
    console.log(`started the work : ${worker}`);
    let work = worker;
    
    //100 lines of code
    console.log(`${worker} work is finished`);
    callback();
}

function callMom(){
    console.log("Finished work so calling Mom")
}

workofPW("PW class", callMom)