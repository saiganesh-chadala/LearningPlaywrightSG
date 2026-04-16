let bug : {id: string , title:string , severity: string , assignee: string} = {
    id : "BUG-123",
    title : "Login button not working",
    severity : "High",
    assignee : "John Doe"
}

function formatBug (b: {id: string , title:string , severity: string , assignee: string}): string {
    return "Bug ID - " + b.id + " | Title - " + b.title + " | Severity - " + b.severity + " | Assignee - " + b.assignee;
}

console.log(formatBug(bug));

console.log("-----------------------");

function countPassedTests (results :  string[]) :number {
    let count : number = 0;
    for (let i=0 ; i<= results.length-1 ; i++) {
        if (results[i] === "Passed") count++;
    }
    return count;
}

function printTestSummary (total : number , passed : number) : void {
    console.log("Total Tests Passed : " + passed);
    console.log("Total Tests Failed : " + (total - passed) + "/" + total)
}

let testResults : string[] = ["Passed", "Failed", "Passed", "Passed", "Failed"];
let passed : number = countPassedTests(testResults);
printTestSummary(testResults.length, passed);