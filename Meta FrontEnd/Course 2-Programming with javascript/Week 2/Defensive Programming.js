/*
    -->The length of the word parameter cannot be less than 2.
    -->The length of the match parameter must be 1.
    -->The type of both the word and the match parameters must be string
*/

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length < 2;

    if(condition1 && condition2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else{
        console.log("Please pass correct argumets to the function.");
    }
}

// Task 6: as a failling test
letterFinder(10, 20);

// task 7: as a passing test
letterFinder("cat", "c");