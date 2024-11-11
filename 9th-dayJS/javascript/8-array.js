
const numbers = [5,66,2,554,7,8,9,1,23];



let val; 

// Get length of the array
val = numbers.length;

// Cheank if array
val = Array.isArray(numbers)

// Get a Single value
val = numbers[3];

// Find the index value
val = numbers.indexOf(5);

// Mutating Array

// Add on the end
// numbers.push(1000);

// Add on the front
// numbers.unshift(2000);

// Take off from end
// numbers.pop();
// numbers.pop();

// Take off from front
// numbers.shift();
// numbers.shift();

const fruits = ["Apple", "Kiwi", "Orange"]

// Splice remove and add

// Remove
// fruits.splice(1,1)

// Add 
  fruits.splice(1,0,"Lemon");

console.log(fruits);