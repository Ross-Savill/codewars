// for https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
    const array = []
    for(let i = 2; i < integer; i++) {
        if(integer % i == 0) { // If divisible by a number
            array.push(i)   // add that number
        }
    }
        if(array.length == 0) {
           return(`${integer} is prime`)
        }
    return array
};
