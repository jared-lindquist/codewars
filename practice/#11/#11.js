//11.
function digitize(n) {
    //code here
return String(n).split("").reverse().map(Number);
}

console.log(digitize(78634));
console.log(digitize(098237));
console.log(digitize(759246));