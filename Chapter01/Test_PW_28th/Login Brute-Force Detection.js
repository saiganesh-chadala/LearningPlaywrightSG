const V_email = "admin@testingacademy.com"
const V_password = "Test@1234"
const attempts = [
  { email: "admin@testingacademy.com", password: "wrong" },
  { email: "admin@testingacademy.com", password: "Tm" },
  { email: "admin@testingacademy.com", password: "wrong" },
  { email: "admin@testingacademy.com", password: "Test@1234" }
];
const AttemptsLimit = 3;
var wrongattempt = 0;
let i=0;
do {
    var attemptno = i + 1;
    if(wrongattempt>= AttemptsLimit){
        console.log(`Attempt ${attemptno}: 🔒 ACCOUNT LOCKED - Rejected`);
        i++;
        continue;
    }

    let isvalid = attempts[i].email ===V_email  && attempts[i].password === V_password
    
    if(isvalid){
        console.log(`Attempt ${attemptno}: ✅ SUCCESS - Logged in`);
    }
    else {
        wrongattempt++;
        if(wrongattempt >= AttemptsLimit ){
            console.log(`Attempt ${attemptno}: ❌ FAILED - Strike ${wrongattempt}/${AttemptsLimit} 🚨 ACCOUNT LOCKED`);
        }
        else{
            console.log(
        `Attempt ${attemptno}: ❌ FAILED - Strike ${wrongattempt}/${AttemptsLimit}`)
        }
    }
    i++;
}while(i<attempts.length);
