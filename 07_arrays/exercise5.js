/* 
Exercise 5


find all integers in an input array and output the integers in 
a new array.
*/


let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(inputArray) {
  return inputArray.filter(function(value) {
    return Number.isInteger(value);
  })
}


let integers = findIntegers(things);
console.log(integers);