/*
1. forEach
2. filter
3. map
*/

// forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
// fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// filter() method
const nums = [0,10,20,30,40,50];
let greater20 = nums.filter( function(num) {
    return num > 20;
});

// console.log(greater20);

// map method
let dividedByTen = [0,10,20,30,40,50].map( function(num) {
    return num / 10
});
// console.log(dividedByTen);

// Working with objects in javascript
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result);

// Working with Maps in JavaScript
// new map();
let bestBoxers = new Map(); // To build a new map;
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
console.log(bestBoxers);
console.log(bestBoxers.get(3));

// Working with Sets
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);



