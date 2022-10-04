/* 
Exercise 8

create a function that returns copy of an object.
takes 2 args: 
1) the object to copy
2) an array of keys to copy 

don't mutate original obj

*/

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};


function copyObj(obj, keys) {
  let newObj = {};
  if (!keys) {
    newObj = Object.assign({}, obj);
    
  
  } else {
    keys.forEach(key =>
      newObj[key] = obj[key]);
    
    }

  return newObj;
  }
  


copyObj(objToCopy);
let newObj = copyObj(objToCopy);
console.log(newObj); // => {foo: 1, bar: 2, qux: 3}

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2); // => {foo: 1, qux: 3}

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3); // => {bar: 2}