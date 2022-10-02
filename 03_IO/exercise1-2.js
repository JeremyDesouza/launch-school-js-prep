// Exercise 1

let rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');

console.log(`Hello, ${name}!`); 

// Exercise 2

let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);
