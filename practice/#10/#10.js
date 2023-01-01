//10.
function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 === 1 || flower1 % 2 === 1 && flower2 % 2 === 0) {
    return true;
    } else {
    return false;
    }
}

console.log(lovefunc(2, 5));
console.log(lovefunc(4, 24));
console.log(lovefunc(567, 23));
console.log(lovefunc(488, 35));