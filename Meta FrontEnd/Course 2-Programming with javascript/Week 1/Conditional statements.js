//Task Are you old enough

//Step 1
var age = 10;

//Step 2
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
}

//Step 3
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
}

//Step 4
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
}

//Step 5
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
} else {
   //this block will run if no condition matches
   console.log('The value of the age variable is not numerical')
}


//The days of the week program

//Step 1
var day = 'Sunday';

//Step 2 / 3 / 4 / 5
var day = 'Sunday';
switch(day) {
    case 'Monday':
        console.log('Read a book');
        break;
    case 'Tuesday':
        console.log('Watch a movie');
        break;
    case 'Wednesday':
        console.log('Read a book');
        break;
    case 'Thursday':
        console.log('Play basketball');
        break;
    case 'Friday':
        console.log('Socialize');
        break;
    case 'Saturday':
        console.log('Chill');
        break;
    case 'Sunday':
        console.log('Have barbecue');
        break;
    default:
        //this block will run if no condition matches
        console.log('There is no such day');
 }