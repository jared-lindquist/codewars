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