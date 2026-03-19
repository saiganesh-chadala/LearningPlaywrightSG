let fruits_new = ["banana", "sitaphal","apple","grapes"]
console.log(fruits_new.sort()); // sorts defaulty to ascending order

console.log('-----------------------');

let nums = [2,10,1,20];

nums.sort(); // wrong sorting for numbers
console.log(nums); 

nums.sort((a,b) => a-b); //ascending order
console.log(nums); 

nums.sort((a,b) => b-a); // descending order
console.log(nums); 

console.log('-----------------------');

//Slicing and Concatanation
//slice(start,end) -- returns an array and doesnt mutate actual (start, end-1)

let arr = [1,2,3,4,5];

console.log(arr.slice(1,3));
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(6));
console.log(arr.slice(-6));


console.log('-----------------------');
//Concat

let a = [1,2];
let b = [3,4];

let c = a.concat(b);
let d = a.concat(b, [5,6]);

console.log(c);
console.log(d);


console.log('-----------------------');
//spread (modern way) concatenation (...)

let e = [...a , ...b]
console.log(e)


console.log('-----------------------');

//join
let f= ["pass","fail" , "skip"].join('')
console.log(f);
let f1= ["pass","fail" , "skip"].join(',')
console.log(f1);
let f2= ["pass","fail" , "skip"].join('+')
console.log(f2);

//chceking arrays
//checking if something is an array

let res =  Array.isArray([1,2,3]);
let res1 =  Array.isArray("saiganesh");
console.log(res);
console.log(res1);

console.log('-----------------------');

//every & some
let r =[80 , 90 , 85].every(s => s>60); //all must pass

console.log(r);

let r1 =[80 , 90 , 85].some(s => s>=90); //atleast one must pass

console.log(r);

console.log('-----------------------');


//shallow copying

let original = [1,2,3];

let copy1 = original.concat();
console.log(copy1)
let copy2 = original.slice();
console.log(copy2)
let copy3 = Array.from(original);
console.log(copy3)
let copy4 = [...original];
console.log(copy4);
console.log('-----------------------');
//deep copying

let copy5 = original;
original.push(99);
console.log(original);
console.log(copy5)

console.log('-----------------------');

//array destructuring
let [first ,second , third] = [1 ,2, 3];
console.log(first)
console.log(second)
console.log(third)

console.log('-----------------------');
let [a1 , b1 , ...c1] = [1,2,3,4,5];
console.log(a1)
console.log(b1)
console.log(c1)