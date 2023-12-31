/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) { // Corrected the placement of the parenthesis
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj)
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] % 2 === 0) {
      return arr[i]
    }
  }
  return null;
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4


// var evenOccurrence = function(arr) {
//   // make empty obj
//   let obj = {};
//   // iterate over arr,
//   while (Object.values(obj).!includes(2)) {

//   }
//     //  if obj, doesn't include arr[i]
//       // obj[arr[i]] === 1
//     // else, arr[i]+ 1
// };
