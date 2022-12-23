//1.
function makeNegative(num) {
    return -Math.abs(num);
}
console.log(makeNegative(33)); //-33
console.log(makeNegative(-12)); // -12
console.log(makeNegative(345));  // -345
console.log(makeNegative(9009)); //-9009
console.log(makeNegative(-9347)); //-9347

//------------------------
//2.
function booleanToString(b){
    //your code here
    return (b).toString();
}

console.log(booleanToString(true));
console.log(booleanToString(false));

// -----------------------
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
//----------------------------//
//4. 
function litres(time) {
    let answer = time / 2;
    return Math.floor(answer);
    }
    //refactor
    function litres(time) {
        return Math.floor(time / 2);
        }

    console.log(litres(4)); //2
    console.log(litres(6.2)); //3
    console.log(litres(2.78)); //1

//--------------------
//5.
function solution(str){
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
    }
    return reversedStr;
}

console.log(solution('reggie')); //iegger
console.log(solution('jared')); // deraj
console.log(solution('mabel')); // lebam

//--------------------------
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
//--------------------------
//7.
function maps(x){
    let newArr = [];
    for(let i = 0; i < x.length; i++){
        newArr.push(x[i] * 2);
    }
    return newArr;
}

console.log(maps([2,1,45]));
console.log(maps([54,6,234]));
console.log(maps([1,3,6]));
console.log(maps([98,34,65]));
//------------------------
//8.
function doubleChar(str) {
    var newString = "";
    for( i = 0; i < str.length; i++) {
    newString += str[i] + str[i];
    }
    return newString;
}

console.log(doubleChar('jared'));
console.log(doubleChar('keri'));
console.log(doubleChar('reggie'));
console.log(doubleChar('mabel'));
//------------------------------
//9. 
function stringToArray(string){
    return string.trim().split(" ");
};

console.log(stringToArray('this is fun'));
console.log(stringToArray('hello world'));
console.log(stringToArray('merry christmas'));
//---------------------------------------