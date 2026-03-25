let responses = [200,201,404,500,404,200,503];

console.log(responses.every(r => r>=200 && r<=299));

let arr1 = responses.filter(r => r>299);
console.log(arr1);
let result = arr1.slice(0,1);
console.log(result);

let result2 = responses.find(r => r >299)
console.log(result2)

let result3 = [...new Set(responses.filter(r => r>299))];
console.log(result3)
