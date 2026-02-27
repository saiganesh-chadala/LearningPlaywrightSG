for (let i=0; i<5 ; i++){
    console.log(i)
}
console.log("----------------------")
for (let i=0; i<5 ; ++i){
    console.log(i);
}

console.log("----------------------")

for (let i=0 ; i<18 ; i++){
    if(i>15){
        console.log("Gift")
    }
    else{
        console.log("No Gift")
    }
}

console.log("While----------------------")

let g = 10 
while (g<10){
    console.log(g);
    g++
}

console.log("Do While----------------------")

let h =10;
do{
    console.log(h);
    h++;
}while(h < 3)