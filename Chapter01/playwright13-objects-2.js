const user = { name: "Sai", age:28 , city: "NYC"}

console.log("-----------Basic Destructuring--------------")

const {name , age} = user ; 
console.log(user.name);
console.log(user.age);

console.log("-----------Rename Variables--------------")
const { age : user_Age , city : user_City} = user;
console.log(user_Age);
console.log(user_City);

console.log("-----------Default Values--------------")
const { Country = "India" } = user;
console.log(Country);


console.log("-----------In Objects - Let Vs Const--------------")

const config = { browser : ":Firefox" , timeout : 3000};

config.browser = "chrome";
config.timeout = 5000;
config.retries = 2;
console.log(config);

config = {browser : "Safari"};
console.log(config) //const will not allow you to re-assign


let config1 = { browser : ":Firefox" , timeout : 3000};

config1.browser = "chrome";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = {browser : "Safari"};
console.log(config1) // let will allow you to re-assign