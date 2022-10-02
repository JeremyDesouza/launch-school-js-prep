/* 

Exercise 4


map each value of myArray to either even or odd and put into a new array 
*/


let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0
];


let evenOrOddArray = myArray.map(value => (value % 2 === 0) ? 'even': 'odd');
console.log(evenOrOddArray); 