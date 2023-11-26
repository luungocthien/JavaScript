'use strict';
function even(array) {
  return array.filter(number => number % 2 === 0);
}

let numbers = [2, 7, 4];
let evennumbers = even(numbers);

console.log("Original Array:", numbers);
console.log("New array with even numbers:", evennumbers);