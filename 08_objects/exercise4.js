/*
Exercise 4

return array of all keys of given object to uppercase without 
mutating original object

*/

let obj = {
  b: 2,
  a: 1,
  c: 3
};


// using map
let upperKeys = Object.keys(obj).map(key => 
  key.toUpperCase());

console.log(upperKeys); // => ['B', 'A', 'C']

// using forEach
// ***forEach always returns the value undefined***

let upperKeys2 = []; 
Object.keys(obj).forEach(key =>
  upperKeys2.push(key.toUpperCase()));

console.log(upperKeys2); // => ['B', 'A', 'C']