let score = 80;
if (score >=90 && score<=100){
    console.log('your grade is : A')
}
else if(score >=80 && score<=89){
    console.log('your grade is : B')
}
else if(score >=70 && score<=79){
    console.log('your grade is : C')
}
else if(score >=60 && score<=69){
    console.log('your grade is : D')
}
else{
    console.log('your grade is : F')
}

if(score<0 || score >100){
    console.log("you have provided <0 & >100 numbers")
}
if(typeof score !== "number" ){
    console.log("you have given string in number")
}