const obj = {a:1 , b:2 , c:3 , d:4 }

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log('----------iterate through object---------')
const user = { name: "Sai " , age: 28}

for (const key in user){
    console.log(`${key} : ${user[key]}`)
}

Object.keys(user).forEach(key => {
    console.log(key)
});

Object.entries(user).forEach(([key , value]) => {
    console.log(`${key} : ${value}`);
    
})