/*
Exercise 2

write function to solicit user first and last name
output to console
*/


let rlSync = require('readline-sync');

function getName(input) {
  let inputName = rlSync.question(input);
  return inputName; 
}


let firstName = getName('Please enter your first name: ');
let lastName = getName('Please enter your last name: ');
console.log(`Hello, ${firstName} ${lastName}!`);