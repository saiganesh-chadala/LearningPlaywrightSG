let str = "Hello, World!";

console.log(str.length);

console.log(str.charAt(2));
console.log(str.at(-2));

console.log(str.charCodeAt(2));

console.log('---------------------');

let url = "https://google.com/login-/true";
url.includes("https"); // true
url.includes("dashboared"); // false

url.startsWith("https:") //true
url.startsWith("http:") //false
url.endsWith("true") // true

console.log(url.indexOf("g"))
console.log(url.indexOf("t"))
console.log(url.lastIndexOf("g"))
console.log(url.indexOf("nothere")) // returns -1 if not present

console.log('----------------');

//search accpets regex and returns index
console.log(url.search(/login/));