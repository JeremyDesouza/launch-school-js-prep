/*
Exercise 7

use reduce to compute sum of squares of numbers in arr

*/

let array = [3, 5, 7];

function sumOfSquares(numArray) {
  let squaresSum = numArray.reduce((accumulator, num) =>
  accumulator + num**2, 0);
  
  return squaresSum;

}

console.log(sumOfSquares(array)); // => 83