const max_tries = 5;
let success = false;
let attempt = 0 ;
sucess_limit = 0.6

do {
    attempt++;
    const randomValue = Math.random();
    if(randomValue > sucess_limit){
        console.log(`Attempt ${attempt} ✅ SUCCESS and value is ${randomValue}`)
    }
    else{
        console.log(`Attempt ${attempt} ❌ FAILED and value is ${randomValue}`)
    }
}while(!success && attempt<5)