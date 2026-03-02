testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass","fail"];
var passVal = 0;
var failVal = 0;
var skipVal = 0;

for (let i=0; i< testResults.length ; i++){
    if(testResults[i] === "pass"){
        passVal++;
    }
    else if(testResults[i] === "fail"){
        failVal++;
    }
    else if(testResults[i] === "skip"){
        skipVal++;
    }
}

console.log(`Total test : ${passVal} Passed , ${failVal} Failed , ${skipVal} Skipped.
passrate : ${passVal/testResults.length *100}`);
if(failVal > 2){
    console.log(`There are ${failVal} failures , so we cant move the Release ahead`)
}
else if(failVal <= 2){
    console.log(`There are ${failVal} minor failures , so review before the Release`)
}
else {
    console.log("all passed , ready for the release")
}