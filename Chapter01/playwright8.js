let fruits = [];

let fruits_frsh = ['apple ', 'banana','cherry']

let arr = [10 , 20 , 30 , 40];

let testResults = ["pass", "fail", "pass","skip"];

let mixed = ["pass ", 10 , true ];

console.log('-----------------------');

//Creating Arrays

//Array Literal (Preferred)

let browsers = ["chrome", "safari", "firefox"];

console.log('-----------------------');

//Array Constructor

let scores = new Array(3) ; //creates [empty * 3]

let score1 =  new Array(10,20,30) ; //creates [10,20,30]

console.log(scores);
console.log(score1)

console.log('-----------------------');

//array of
let test = Array.of(1,2,3,4);
console.log(test)

console.log('-----------------------');

// array from

let test1 = Array.from("hostel");
console.log(test1)

console.log('-----------------------');

//access
let accs = ["pass", "fail" , "skip"];

console.log(accs[0]);
console.log(accs[1]);
console.log(accs[2]);

console.log("-----------------")

console.log(accs.at(-1)); //last element of the array
console.log(accs.at(-2));
console.log(accs.at(-3));
console.log(accs.at(-4));

console.log('-----------------------');

//modify
accs[2]= "blocked";
console.log(accs)

console.log(accs.length)

console.log('-----------------------');

// add and remove

let arr1 = [1,2,3];

arr1.push(4); //add at the end of an array

console.log(arr1);

arr1.pop(); // remove one element from end of an array
console.log(arr1)

arr1.push(4,5);
console.log(arr1);

arr1.unshift(0); //add at the begining
console.log(arr1)

arr1.shift(); //remove one element from the begining
console.log(arr1)

console.log('-----------------------');

//splice(start,deletecount, ..itemstoAdd)

arr2=[1,2,3,4,5];

arr2.splice(2,1); // removed one element at index 2
console.log(arr2);

arr2.splice(2,0,100); //if we keep zero it removes no element ( removes 0 and add 100 at index 2)
console.log(arr2)

arr2.splice(1, 2 , 10 ,20); // replaces 2 elements at index 1 with 10 , 20
console.log(arr2);

console.log('-----------------------');

//indexOf -- returns the first index of the element , if not found returns -1
let arr3 = ['pass', 'fail','pass','skip','fail'];
console.log(arr3.indexOf('fail'));

console.log(arr3.lastIndexOf('fail'));

//includes returns boolean 
console.log(arr3.includes('fail')); //true
console.log(arr3.includes('error')); // false

console.log('-----------------------');

//find returns the first matching element
arr4 = [10 , 20 ,34 , 35,40 ]
arr4.find(n => n>20); // 34

arr4.findIndex(n => n > 30); // 2(34)

arr4.findLast(n => n > 20); // 40
arr4.lastIndexOf(n => n>20); //4(40)

console.log('-----------------------');
//Iterations...

let tests = ['login' , 'checkout', 'search'];

for (let i=0 ; i<tests.length; i++){
    console.log(tests[i])
}

//for ..of
console.log('-----------------------');

for(let test of tests){
    console.log(test) // gives value
}

console.log('-----------------------');
//for each
tests.forEach((test,index) => {
    console.log(`${index} : ${test}`)
})

console.log('-----------------------');
// entries() -- index + value

for (let[i,test] of tests.entries()){
    console.log(i , test)
}
console.log('-----------------------');
for (let test in tests){
    console.log(test , "-->" , tests[test])  // gives index
}

console.log('-----------------------');

let scores1 = [45 , 65 , 70 , 89 , 90];

//map transforms every element of the array and returns new array
let grades = scores1.map( n => n>=70 ? "Pass" : "Fail");
console.log(grades)

console.log('-----------------------');

//filter -- keeps the elements which passes the test
let passing =  scores1.filter(n => n>65);
console.log(passing)

console.log('-----------------------');

//flat - flattens nested array
let arr5 = [[1,2],['sai','ganesh'],[3,4]]
console.log(arr5.flat());

console.log('-----------------------');

//reduce -- accumulates to single value
let total = scores1.reduce((sum,s) => sum+s , 0);
console.log(total)

console.log('-----------------------');

let fruits_new = ["banana", "sitaphal","apple","grapes"]
console.log(fruits_new.sort()); // sorts defaulty to ascending order
