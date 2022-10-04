/*

Exercise 5

*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

console.log(myObj); // => {}
console.log(myObj.foo); // => 1
console.log(myObj.bar); // => 2


/* 
Exercise 7

add qux property with value 3 to myObjs

what do the 2 code snippets below output?
*/

myObj.qux = 3;


/* outputs only the keys assigned directly to myObj.
(only 'qux')*/

let ObjKeys = Object.keys(myObj);
ObjKeys.forEach(function(key) {
  console.log(key);
});


/* 

the for..in loop over keys of myObj iterates over all
keys in myObj (both direct assignments and those that
were inherited from myProtoObj)

*/
for (let key in myObj) {
  console.log(key);
}


