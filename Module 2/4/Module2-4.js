'use strict';
let numbers = [];
let n;
do {
   n = parseFloat(prompt('Enter a number (0 to quit): '));
if (!isNaN(n) && n !== 0) {
    numbers.push(n);
}
} while (n !== 0);

numbers.sort((a,b) => b-a);

console.log("Numbers from largest to smallest:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}