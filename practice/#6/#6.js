//6.
function bmi(weight, height) {
    let bmi = weight/(height * height);
    if (bmi <= 18.5) {
    return "Underweight";
    } else if (bmi <= 25.0) {
    return "Normal";
    } else if (bmi <= 30.0) {
    return "Overweight";
    } else {
    return "Obese";
    }   
}

console.log( bmi(230,6)); //underweight
console.log( bmi(275,3.5)); //normal
console.log( bmi(230,2.25)); // obese
console.log( bmi(260,3)); //overweight