let a = 5;
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;
console.log(a)
console.log(b)
console.log(c)

console.log("-------------For-->1------------")
for (let i=1;i<=5;i++){
    console.log("Hello...."+i)
}

console.log("-------------For-->2------------")
for (let i=1;i<=10;i++){
    console.log(i)
}

console.log("-------------For-->3------------")
for(let i=1;i<=20;i++){
    if(i%2 === 0){
        console.log("For loop even number--"+i)
    }
}

console.log("-------------For-->4------------")
let sum = 0;
for (let i=0;i<=10;i++){
    sum += i;
    if(i==10){
        console.log(`sum of first ${i} natural numbers is --> ${sum}`)
    }
}

console.log("-------------For-->5------------")
for (let i=1;i<=10;i++){
    console.log(`5 * ${i} = ${i*5}`)
}


console.log("-------------While-->1------------")
let x =1 ;
while(x<=5){
    console.log("Playwright -"+x)
    x++;
}

console.log("-------------While-->2------------")
let y =1;
while (y<=10){
    console.log(y)
    y++;
}

console.log("-------------While-->3------------")
let z = 1;
while(z<=20){
    if(z%2 === 0){
        console.log(`While loop even number ${z}`)
    }
    z++;
}

console.log("-------------While-->4------------")
let k =0;
let sum1= 0;

while (k<=10){
    sum1 += k;
    if(k===10){
        console.log(`while loop sum of ${k} natural numbers is ${sum1}`)
    }
    k++;
}

console.log("-------------While-->5------------")
let m = 0;
while (m<=10){
    console.log(`7 * ${m} = ${m*7}`)
    m++;
}