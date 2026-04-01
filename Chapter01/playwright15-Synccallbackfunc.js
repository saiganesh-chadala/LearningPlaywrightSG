let results = ["pass","fail","pass","skip"];

results.forEach(function(result , index){
    console.log("Test "+index+ "-> " +result);
});

console.log("All done!!") //All done will be printed LAST bcz forEach is an sync callback func , 
// it will iterates to all the array elements then only last will be printed