/*
 Exercise 1
 */

'Jeremy ' + 'Desouza' // Jeremy Desouza

/* 
Exercise 2
*/

let number = 4936;
let ones = 4936 % 10; // 6 is the ones digit
number = (number - ones) / 10 ;
console.log(number);

let tens = number % 10; // 3 is the tens digit
number = (number - tens) / 10;

let hundreds = number % 10; // 9 is the hundreds digit
number = (number - hundreds) / 10;

let thousands = number % 10; // 4 is the thousands digit


console.log(`starting number: 4936
thousands place: ${thousands}
hundreds place: ${hundreds}
tens place: ${tens}
ones place: ${ones}
`);

/*
Exercise 3

'true' is String
false is Bool
1.5 is Number 
2 is Number 
undefined is Undefined
{foo: 'bar'} is Object
*/

/*
Exercise 4
*/
console.log('5' + 10) // logs '510' as string (implicit type coercion)

/*
Exercise 5
*/
console.log(Number('5') + 10) // 15

/*
Exercise 6
*/
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

/*
Exercise 7

No, trying to access an array element with an index >= to 
the length of the array will return undefined
*/

/*
Exercise 8
*/

let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

/*
Exercise 9
*/

let pets = {
  asta: 'dog', 
  butterscotch: 'cat', 
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard'
};

/*
Exercise 10
*/

'foo' === 'Foo' // false

/*
Exercise 11
*/

parseInt('3.1415') // 3 

/* 
Exercise 12
*/

'12' < '9' // true


