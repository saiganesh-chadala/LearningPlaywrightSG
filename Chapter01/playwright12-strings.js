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

//execises of strings from taskboard

let log = "[ERROR 2024-03-24 Test Case : Login Status: 500]";
let status1 = log.match(/Status: (\d+)/)[1];
console.log(status1);

console.log('----------------');

// let env = "staging";
// let module = 'auth';
// let count = 7;
// let testid = `${env}_${module}_${String(count).padStart(3,"0")}`;
// console.log(testid);

console.log('----------------');
let actual = "  PASS  ";
let expected = "pass"
let result = actual.trim().toLowerCase() === expected;
console.log(result);

console.log('----------------');
let testURL = "https://skillspricer.com/search?query=login&page=2&sort=asc";
let params = Object.fromEntries(testURL.split('?')[1].split('&').map(p => p.split('=')));
console.log(params);

console.log('----------------');

let token = "Bearer vsdnmdcSW9.secret";
let masked = token.replace(/(?<=Bearer).+/,"****REDACTED****")
console.log(masked)