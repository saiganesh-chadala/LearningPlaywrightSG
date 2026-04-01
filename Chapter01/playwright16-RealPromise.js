function openBrowser(){
    return new Promise(function(resolve,reject){
        resolve("Browser Opened sucessfully..")
    });
}
function gotoLogin(){
    return new Promise(function(resolve,reject){
        resolve("Login page loaded")
    })
}
function enterCreds(){
    return new Promise(function(resolve,reject){
        resolve("Credentials entered sucessfully..")
    });
}
function clcikLogin(){
    return new Promise(function(resolve,reject){
        resolve("Clicked on Login Button sucessfully..")
    });
}

openBrowser().then(function(msg){
    console.log("Step 1: " + msg);
    return gotoLogin();
}).then(function(msg){
    console.log("Step 2: "+msg);
    return enterCreds();
}).then(function(msg){
    console.log("Step 3: "+ msg);
    return clcikLogin();
}).then(function(msg){
    console.log("Step 4: "+msg);
}).catch(function(error){
    console.log("Error : " +error)    
}).finally(function(){
    console.log("Done the Execution")
})