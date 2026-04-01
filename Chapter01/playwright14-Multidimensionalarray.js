console.log("--------------right triangle------------");
let n = 5

for (let i = 1; i <= n; i++) {
    let m = " ";
    for (let j = 1; j <= i; j++) {
        m += "*";
    }
    console.log(m)
}

console.log("--------------left triangle------------");

for (let i = n; i >= 1; i--) {
    let m = " ";
    for (let j = i; j >= 1; j--) {
        m += "*";
    }
    console.log(m);
}

console.log("--------------Pyramid------------");

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*"
    }
    console.log(row)
}

console.log("--------------Inverted Pyramid------------");

for (let i = 0; i < n; i++) {
    let row = "";

    for (let s = 0; s < i; s++) {
        row += " ";
    }

    for (let k = 0; k < 2 * (n - i)-1; k++) {
        row += "*"
    }
    console.log(row)
}
