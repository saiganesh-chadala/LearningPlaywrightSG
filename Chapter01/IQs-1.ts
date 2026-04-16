function buildEndpoint(base:string , path : string) : string {
    return base+path;
}

function isSuccessCode(code: number) : boolean {
    return code>=200 && code<300;
}

function logTestStep (step: string): void {
    console.log("[STEP] " +step);
}

console.log(buildEndpoint("https://api.example.com", "/users"));
console.log(isSuccessCode(200));
console.log(isSuccessCode(404));
logTestStep("Navigate to the login page");

console.log("-----------------------");

let StatusCode: number[] = [200, 201, 400, 404, 500];
let testSuites: string[] = ["Smoke", "Regression", "Sanity"];

console.log("Status Codes: " , StatusCode);
console.log("Test Suites: " , testSuites);

let testResult: { name : string , status : string , duration : number } = {
    name : "Login Test",
    status : "Passed",
    duration : 1200
}

console.log(testResult.name + " - " + testResult.status + " in " + testResult.duration + "ms");

console.log("-----------------------");

let responseCodes: number[] = [200, 201, 400, 404, 500];

function getFailedCodes(codes : number[]) : number[] {
    return codes.filter(function(code : number) :boolean {
        return code >=400;
    });
}

console.log("Response Codes: " , responseCodes);
console.log("Failed Codes: " , getFailedCodes(responseCodes));