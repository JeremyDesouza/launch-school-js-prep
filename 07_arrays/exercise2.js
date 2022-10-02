/* 
Exercise 2

log even values of myArray to console
*/

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];


let evenArrayArrow = myArray.filter(value => value % 2 === 0);


function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } 
}

let evenArrayCallback = myArray.filter(isEven);



console.log(myArray); // => [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0]
console.log(evenArrayArrow); // => [6, 4, 2, 4, 16, 0]
console.log(evenArrayCallback); // => [6, 4, 2, 4, 16, 0]









