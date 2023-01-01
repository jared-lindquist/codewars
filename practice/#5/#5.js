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