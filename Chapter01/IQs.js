//true 
if("ganesh") console.log("string is truthy!");
if(15) console.log("number is truthy!");
if({}) console.log("empty object is truthy!");
if([]) console.log("empty array is truthy!");

//false
if("") console.log("empty string is falsy"); //wont print
if(NaN) console.log("not an number is false");
if(null) console.log("null is false");
if(undefined) console.log("undefined is false");
if(0) console.log("0 is false");
