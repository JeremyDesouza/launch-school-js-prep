/*
Exercise 1
*/

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // => [1, 4, 3]

/*
Exercise 3
*/

console.log(Math.sqrt(37)); // => 6.08276...

/*
Exercise 4

display largest numeric value in a given list
*/

console.log(Math.max(1, 6, 3, 2)); // => 6
console.log(Math.max(-1, -6, -3, -2)); // => -1
console.log(Math.max(2, 2)); // => 2

/*
Exercise 5 

this function takes an input string as its argument
converts the string to an array (split on any single space in the string)
reverses the items in the array
maps each element in the array to the element's length
returns new array of length values
*/

function doSomething(string) {
  return string.split(' ').reverse().map((value) =>
  value.length);
}

console.log(doSomething('Pursuit of happiness')); // => [9, 2, 7]



