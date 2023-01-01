//3.
function otherAngle(a, b) {
    let angle = 180 - (a + b)
    return angle;
}

console.log(otherAngle(30, 45)); //105
console.log(otherAngle(60, 81)); // 39
console.log(otherAngle(12, 80)); // 88
console.log(otherAngle(24, 45)); // 111
console.log(otherAngle(54,13)); // 113