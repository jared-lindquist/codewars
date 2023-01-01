//12.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    if (distanceToPump <= (mpg * fuelLeft)) {
        return true
        } else {
        return false;
    }
};

console.log(zeroFuel(75,25,3));
console.log(zeroFuel(100,25,3));
console.log(zeroFuel(400,50,8));