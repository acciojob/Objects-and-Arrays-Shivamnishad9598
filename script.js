// Given array and object
let players = ['Alice', 'Bob', 'Charlie'];
let person = {
  name: 'John',
  age: 30,
  country: 'USA'
};

// Create a variable team that refers to the players array
let team = players;

// Create a variable team1 that is a copy of the players array
let team1 = players.slice(); // Using slice() to create a shallow copy of the array

// Create a variable cap1 that is a copy of the person object
let cap1 = Object.assign({}, person); // Using Object.assign() to create a shallow copy of the object

// Test
console.log(team);   // Output: ['Alice', 'Bob', 'Charlie']
console.log(team1);  // Output: ['Alice', 'Bob', 'Charlie']
console.log(cap1);   // Output: { name: 'John', age: 30, country: 'USA' }
