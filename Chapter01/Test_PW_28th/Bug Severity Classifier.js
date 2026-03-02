let frequency = "often";
let impact = "minor"

if(frequency === "always"){
    if(impact === "blocker"){
        console.log("Severity is P0")
    }
    else if(impact === "major"){
        console.log("Severity is P1")
    }
    else if(impact === "minor"){
        console.log("Severity is P2")
    }
}
else if (frequency === "often"){
    if(impact === "blocker"){
        console.log("Severity is P1")
    }
    else if(impact === "major"){
        console.log("Severity is P2")
    }
    else if(impact === "minor"){
        console.log("Severity is P3")
    }
}
else if(frequency === "rarely"){
    if(impact === "blocker"){
        console.log("Severity is P2")
    }
    else if(impact === "major"){
        console.log("Severity is P3")
    }
    else if(impact === "minor"){
        console.log("Severity is P4")
    }
}