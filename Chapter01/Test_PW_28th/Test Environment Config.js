var dev = {
    "Base URL" : "https://dev-api.testingacademy.com",
    "API Key": "dev_key_xxxx-xxxx" ,
    "Timeout": 10000 ,
    "Description": "Dev - testing environment"
}
var staging = {
    "Base URL" : "https://staging-api.testingacademy.com",
    "API Key": "stg_key_xxxx-xxxx" ,
    "Timeout": 8000 ,
    "Description": "Stage - prod mirror environment"
}
var prod = {
    "Base URL" : "https://prod-api.testingacademy.com",
    "API Key": "prod_key_xxxx-xxxx" ,
    "Timeout": 6000 ,
    "Description": "Live Prod environment"
}

let env = "prod"

switch(env){
    case 'dev':
    console.log(dev["Base URL"]);
    console.log(dev["API Key"]);
    console.log(dev.Timeout);
    console.log(dev.Description);
    break;
    case 'staging':
    console.log(staging["Base URL"]);
    console.log(staging["API Key"]);
    console.log(staging.Timeout);
    console.log(staging.Description)
    break;
    case 'prod':
    console.log(prod["Base URL"]);
    console.log(prod["API Key"]);
    console.log(prod.Timeout);
    console.log(prod.Description)
    break;
    default:
        console.log("enter valid environment")
}