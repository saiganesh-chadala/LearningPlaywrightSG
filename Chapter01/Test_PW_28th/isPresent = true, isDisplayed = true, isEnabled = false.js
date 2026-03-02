let isPresent = true;
let isDisplayed = false;
let isEnabled = true;
let State;
let Severity;

if(isPresent === true && isDisplayed === true && isEnabled === true){
     State = "Ready"
}
else if(isPresent === true && isDisplayed === true && isEnabled === false){
     State = "Disabled";
}
else if(isPresent === true && isDisplayed === false){
     State = "Hidden";
}
else if(isPresent === false){
     State = "Not Found";
}

Severity = (isPresent === false) ? "Critical" : 
(isDisplayed === false && isEnabled === false) ? "Warning" : "All OK"


const action =
    (State === "Not Found") ? "Element not found. Verify selector, wait for render, or check navigation/state." :
    (State === "Hidden") ? "Element is present but hidden. Scroll into view, wait for visibility, or validate UI conditions." :
    (State === "Disabled") ? "Element is visible but disabled. Wait for enable state or check preconditions." :
    "Element is ready. Proceed to click/type/assert safely.";


console.log(`Status :${State} , Severity : ${Severity}
    Action : ${action}`)