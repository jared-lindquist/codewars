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