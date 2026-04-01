console.log("---------------.catch()----------");


let apiCall1 = new Promise(function(resolve, reject){
        reject("500 Error- Server issue")
});


apiCall1.then(function(){
    console.log("Data retrieved sucessfully..")
}).catch(function(error){
    console.log(error)
});