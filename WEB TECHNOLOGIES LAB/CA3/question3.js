let students = ["Komal", "Karunesh", "Vishal", "Ankit", "Karan"];

function arrayOperation(arr){
    
    // a
    console.log(`The lenght of the arr array is: ${arr.length} \n` );

    //b
    console.log("Insert(-) after each element")
    arrWithDash = arr.map(function(student){
        return student + ' -';
    });
    console.log(arrWithDash + "\n");

    // b
    console.log("Replace Komal with Abhishek\n");
    let index = arr.indexOf("Komal");
    arr.splice(index, 1, "Abhishek");
    console.log(arr + "\n");

    // d
    console.log("Check if 'Karan' is presnt in the array\n");
    console.log(arr.includes("Karan") + "\n");

    // e
    console.log("Returning the position of Abhishek\n");
    console.log(arr.indexOf('Abhishek') + "\n");

    // f
    console.log("Insert 'Aayush' at index 0 and 'Aman' at the last\n");
    arr.unshift('Aayush');
    arr.push('Aman');
    console.log(arr + "\n");

    // g
    console.log("Remove 'Aayush' from index 0 and 'Aman' from last\n")
    arr.shift();
    arr.pop();
    console.log(arr + "\n");

    // h
    console.log("Returning Karunesh, Abhishek, Ankit: \n ")
    //console.log(`${arr[1]}, ${arr[0]}, ${arr[3]}`)

    let namesToReturn = ['Karunesh', 'Abhishek', 'Ankit'];
    let filteredStudents = arr.filter(function(student){
        return namesToReturn.includes(student)
    });
    console.log(`${filteredStudents}`);
}

arrayOperation(students);