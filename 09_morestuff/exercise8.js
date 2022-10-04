/*
Exercise 8
*/

function isNotANumber(value) {
  if (typeof value !== 'number') {
    return false
  } else {
    if (String(value) === 'NaN') {
      return true;
    } else {
      return false
    };
    
  }
  
}

console.log(isNotANumber('NaN'));

/* 
function isNotANumber(value) {
  return value != value;
}

works because NaN is the only javascript value not === to itself


*/