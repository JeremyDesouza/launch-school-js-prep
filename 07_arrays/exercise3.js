/*
Exercise 3

return all even numbers in array from a (nested) array
*/

let myNestedArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0]
];

let evenArray = [];

myNestedArray.forEach(function(innerArr) {
  evenArray = evenArray.concat(innerArr.filter(element =>
    element % 2 === 0))
  
}    
)

console.log(evenArray); // [6, 4, 2, 4, 16, 0]