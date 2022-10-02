/*
Exercise 3

Get 2 input numbers from the user. 
Multiply the numbers together.
Log ouput to console.
*/

function multiply(num1, num2) {
  // multiply two numbers
  return num1 * num2;
}

function getInput(prompt) {
  // get input from user
  let rlSync = require('readline-sync');
  let inputNumber = parseFloat(rlSync.question(prompt)); 
  return inputNumber

}

let rlSync = require('readline-sync');
let firstNum = getInput('Enter the first number: ');
let secondNum = getInput('Enter the second number: ');
let product = multiply(firstNum, secondNum);

console.log(`${firstNum} * ${secondNum} = ${product}`);