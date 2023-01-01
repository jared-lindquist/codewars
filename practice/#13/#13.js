//13.
function getDivisorsCnt(n){
        let divisors = 0;
    mod = n;
    while (mod > 0){
        if(n % mod === 0){
        divisors++;
    }
        mod--;
    }
    return divisors;
}

console.log(getDivisorsCnt(745));
console.log(getDivisorsCnt(36));
console.log(getDivisorsCnt(9684));