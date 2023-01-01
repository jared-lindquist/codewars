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