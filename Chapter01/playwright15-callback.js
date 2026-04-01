function placeOrder(item , callback){
    console.log(`placing an order for ${item}`);
    callback();
}

function print(){
    console.log("Order is done")
}

console.log("---------first way using normal function")
placeOrder("Burger",print)  //1st way


console.log("---------second way using anonymous function")
placeOrder("Pizza", function(){
    console.log("Annonymous function, i am also a function without name can be used as callback");
    console.log("Order is done")
});

console.log("---------third way using arrow function");

placeOrder("Biryani", ()=> {
    console.log("Arrow function, i am also a function without name can be used as callback");
    console.log("Order is done")
})
