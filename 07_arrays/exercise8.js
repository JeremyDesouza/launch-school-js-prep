/* 
Exercise 8

given an array of string, use reduce to output an array 
only odd string lengths.
*/


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(stringArr) {
  let outputArr = stringArr.reduce((accumulator, string) => {
    if (string.length % 2 === 1) {
      accumulator.push(string.length);
    }
    
    return accumulator;
  }
    
    , [])
  
    return outputArr;
  }

  console.log(oddLengths(arr));