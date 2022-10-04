/* 
Exercise 6

*/

function allMatches(words, regex) {
  let matchArray = [];
  words.forEach(function(word) {
    let result = regex.test(word);
    
    if (result) {
      matchArray.push(word);
    }

  });
  return matchArray;
}


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labryinth',
  'elaborate',
  'polar bear'
]

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
