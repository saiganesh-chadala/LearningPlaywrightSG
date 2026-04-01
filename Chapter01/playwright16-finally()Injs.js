console.log("---------------.finally()----------");


let apiCall2 = new Promise(function(resolve, reject){
        reject("500 Error- Server issue")
});


apiCall2.then(function(){
    console.log("Data retrieved sucessfully..")
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("I'll be executed anyways irrespective of the outcome of promise")
})