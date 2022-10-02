/*
Exercise 7

function that converts string to all caps if string length > 10

*/


function allCaps(str) {
  
  if (typeof str !== 'string') {
    return 'Error: input must be a string';
  
  } else {

    if (str.length <= 10) {
      return str;
    
    } else {
      return str.toUpperCase();
  
    }
  } 
}


console.log(allCaps('test for long string'));
console.log(allCaps('short'));
console.log(allCaps(5));
console.log(allCaps(false));
