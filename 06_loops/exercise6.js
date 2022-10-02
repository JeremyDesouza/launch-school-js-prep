/* 
Exercise 6

implement a factorial function using recursion
assume arg is always a positive integer
*/

function factorial(posInt) {
  if (posInt === 1) {
    return 1;
  } else {
    return posInt * factorial(posInt - 1);
  }
}

console.log(factorial(5)); // => 120
console.log(factorial(8)); // => 40320
