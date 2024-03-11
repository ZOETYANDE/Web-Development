const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];

const fruitsAndBerries = [...fruits, ...berries];

console.log(fruitsAndBerries);

const flying = {wings: 2};
const car = {wheels: 4};

const flyingCar = {...flying, ...car};

console.log(flyingCar);

// Adding new members to arrays without using the push() method

let veggies = ['onions', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Converting a string to an array using the spread operator

const greeting = 'hello';
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

// Copy either an object or an array into separate one

const car1 = {
    speed: 200,
    color: 'yellow'
}

const car2 = {...car1}

car1.speed = 201;

console.log(car1.speed, car2.speed);

// We can also copy an array into a completly different array using the spread operato
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);