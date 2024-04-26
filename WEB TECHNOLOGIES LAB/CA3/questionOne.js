// Short program that prints each number 
// from 1 to 100 on a new line

function fizzBuzzFunc(n){
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else{
            console.log("Buzz");
        }
    }
}

fizzBuzzFunc(100);