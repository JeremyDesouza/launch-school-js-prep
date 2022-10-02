/*
Exercise 1
*/

false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true //  false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false //  true


/*
Exercise 4

*/
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// => 'Product2'
// => 'Product3'
// => 'Product not found!'

/*
Exercise 5

original code:
return foo() ? 'bar' : qux();
*/

if (foo()) {
  return 'bar';
} else {
  return qux();
}

/* 
Exercise 6

Empty lists evaluate to true by default
if ([]) => is truthy

(oddly ([] == true) evaluates to false)
*/



