//primitive types
let name : string = "John";
let age : number = 30;
let isStudent : boolean = true;
let nothing : null = null;
let notDefined : undefined = undefined;

//Arrays
let numbers : number[] = [1, 2, 3, 4, 5];
let names : Array<string> = ["Alice", "Bob", "Charlie"];

//unknown type
let unknownValue : unknown = "This can be any type";

//any type
let anyValue : any = 42;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(nothing);
console.log(notDefined);
console.log(numbers);
console.log(names);
console.log(unknownValue);
console.log(anyValue);


console.log("-----------------------");

//Functions annotations
function greet(name : string) : string {
    return `Hello ${name}!`;
}

console.log(greet("Alice"));

console.log("-----------------------");

//arrow function

const multiply = (a:number , b:number): number => a*b;
console.log(multiply(5, 10));

//Object annotation

let user : { name:string , age:number } ={
    name : "Sai Ganesh",
    age : 27
}

//Function which doesnt return anything
function LogMessage (msg : string) : void {
    console.log(msg);
}
LogMessage("This is a log message");