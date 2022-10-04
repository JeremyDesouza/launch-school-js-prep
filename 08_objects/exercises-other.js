/*
Exercise 1
*/

let person = {
  name: 'Bob',
  occupation: 'web developer',
  hobbies: 'painting'
};

console.log(person.name); // => Bob
console.log(person['name']); // => Bob

/*
Exercise 2

all keys listed are valid. Non-string keys are coerced to strings

*/

/*
Exercise 3

*/

let arrayLikeObj = {0: 'first entry', 
  1: 'second entry', 
  2: 'third entry'};



/*
Exercise 6

'foo' - primitive
3.1415 - primitive
['a', 'b', 'c'] - object
false - primitive
foo - neither
function bar() { return 'bar'} - object
undefined - primitive
{a: 1, b: 2} - object

*/


/*
Exercise 11
replace the value 6 with 606
*/

let obj = {
  foo: {a: 'hello', b: 'world'},
  bar: ['example', 'mem', null, {xyz: 6}, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;

