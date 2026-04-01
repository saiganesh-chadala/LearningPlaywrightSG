let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth,checkDB,checkCache]).then(function(results){
    console.log("All the checks :", results)
});

Promise.all([
    Promise.resolve("OK"),
    // Promise.reject("DB Down"), 
    Promise.resolve("OK"),
    Promise.resolve("OK")
]).then(function(r){
    console.log(r)
}).catch(function(error){
    console.log("Failed: ",error)
})