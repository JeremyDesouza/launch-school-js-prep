/*
Exercise 2

function that computes factorial using for loop
Assume argument is always a positive integer
*/


function factorial(posInt) {
  let outputNum = 1;
  for (let counter = posInt; counter > 0; counter -= 1) {
    outputNum *= counter;
  }
  return outputNum;
}

console.log(factorial(5)); // => 120
console.log(factorial(8)); // => 40320