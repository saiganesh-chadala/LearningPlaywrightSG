function outer(){
    let message = "Hello...Sai"
    console.log("outer is called");

    function inner(){
        console.log("inner is called");
        console.log(message);
    }
    return inner;
}

let fn_inner = outer();
fn_inner();

console.log('-----------closure ex1----------------')

function makeCounter(start = 0){
    let count = start; // this variable is closed - over

    return {
        increment () { count++; },
        decrement () { count--; },
        getValue () { return count; }
    }
}

let counter = makeCounter();

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());


console.log('-----------closure ex2----------------')

function makeRetryTracker(max) { 
    let attempts = 0;

    function tryAgain(testName){
        attempts++;
        if(attempts>max) { 
            return `${testName} exceed max retries ${max}`
        }
         return `Attempt ${attempts}/${max} for ${testName}`;
    }

    return tryAgain;
}

let retry = makeRetryTracker(3);

console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));

console.log('-----------closure ex3----------------')
//write a function makeRateLimiter(limit) that returns a function
// Each call to returned function should track usage and return true if under limit
// false if limit exceeded

function makeRateLimiter(limit){
    let call =0 ;

    function check(){
        call++;

        return call <=limit;
    }

    return check;
}

let limiter = makeRateLimiter(3);

console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());