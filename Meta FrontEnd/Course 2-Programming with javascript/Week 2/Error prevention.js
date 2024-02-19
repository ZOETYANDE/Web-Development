// Task 1
function addTwoNums(a, b){
    console.log(a+b);
}

// Task 2
addTwoNums(5, "5");

// Task 3 using try and catch block

function addTwoNums(a, b){
    try{
        console.log(a + b);
    }catch(err){
        console.log(err);
    }
}

// Task 4
// If the passed-in arguments are
// numbers, throw an error
// Task 5 updating the catch block

function addTwoNums(a, b){
    try{
        if(typeof(a) != 'number'){
            throw new ReferenceError('the first argument is not a number');
        }
        else if(typeof(b) != 'number'){
            throw new ReferenceError('the second argument is not a number');
        }else{
            console.log(a + b);
        }
    } catch(err){
        console.log("Error!", err);
    }
}

// Task 6 invoking the addTwoNums function using 5 and "5" as arguments
//Adding another console log under the addTwoNums
addTwoNums(5, "5");
console.log("It still works");