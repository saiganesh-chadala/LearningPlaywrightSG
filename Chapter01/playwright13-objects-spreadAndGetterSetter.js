const obj1 = { a:2 , b: 3};
const obj2 = { c:4 , d: 5};

const copy = {...obj1};
console.log(copy);

const merged = {...obj1 , ...obj2}
console.log(merged);

console.log("------Getter & Setter---------");

let user = {
    firstName : "Sai" , 
    lastName : "Ganesh",
    get fullName(){
        return this.firstName + this.lastName; 
    },
    set fullName(value){
        [this.firstName , this.lastName] = value.split(" ")
    }
}

console.log(user.fullName);
user.fullName = "Chadala Ganesh" ; 
console.log(user.fullName)