let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;
var limitExceedeed = 0;
var MinResp = responseTimes[0];
var MaxResp = responseTimes[0];
for( let i =0 ; i<responseTimes.length ; i++){
    if(responseTimes[i] >= SLA_LIMIT){
        limitExceedeed++;
    }
    if(responseTimes[i]>MaxResp){
        MaxResp = responseTimes[i];
    }
    if(responseTimes[i]<MinResp){
        MinResp = responseTimes[i]
    }
}
let finalResult = limitExceedeed >0 ? "Not Met" : "Valid"
console.log(`Total Requests : ${responseTimes.length}
    Minimun response: ${MinResp}
    Maximum response: ${MaxResp}
    SLA Breaches: ${limitExceedeed} (${limitExceedeed/responseTimes.length * 100})
    Final REsponse: ${finalResult}`)

