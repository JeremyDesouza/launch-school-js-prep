/*
Exercise 6

use map and filter to determine lengths of an array of string elements.
Discard the even values and keep the odd values.

*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengthArr(arrOfStrings) {
  
  let lengthArr = arrOfStrings.map(string => string.length);
  let oddLengthArr = lengthArr.filter(value => value % 2 === 1);
  
  return oddLengthArr;
}


console.log(oddLengthArr(arr)); // => [1, 5, 3]