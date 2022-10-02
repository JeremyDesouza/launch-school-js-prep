/*
Exercise 2 and 3

write a function that determines if argument is an even number

*/

function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
  else {
    console.log('Error: the value entered is not a number');
  }
  
}

evenOrOdd(5);
evenOrOdd(10);
evenOrOdd(-6);
evenOrOdd(0);
evenOrOdd('hello');
evenOrOdd(true);
