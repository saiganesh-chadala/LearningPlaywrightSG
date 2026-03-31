const Student = {
    name : "SAi Ganesh",
    age : 28 ,
    email : "saiganesh1598@gmail.com"
}

//Accessing propeorties
console.log("-----------Accessing Properties--------------")


console.log(Student.age);
console.log(Student["age"]);

console.log("-----------Dynamic property access--------------")
let k_email = "email";
console.log(Student[k_email])

console.log("----------Adding or Modifiying props---------------")

Student.Phoneno = 7032934647;
Student.age = 27;

console.log(Student)

console.log("-----------Call by value & Call by Ref || Primitive - Call by value || Objects - call by ref--------------")

//Primitive data types -- call by value
//Primitive - number , string , boolean , null , undefined

let a = 90; 
let b = a ;

a = 99;

console.log(b);
console.log(a);

const Student1 = {
    age : 24 , 
    name : "Sai " 
}

const student2 = Student1 ; 

student2.name = "Sai Ganesh";

console.log(student2);
console.log(Student1);

console.log("------------Objects can have functions in it-------------")

const calculator = {
    value  : 0,
    add(n){
        this.value += n;
        return this;
    },
    sub(n){
        this.value -= n ;
        return this;
    }
}

console.log(calculator.add(5).sub(4));