"use strict";

let numbers= [];
while (true) {
    let n = parseFloat(prompt('Enter a number: '));
    if (numbers.includes(n)) {
        console.log("Number already entered, stopping.");
        break;
    }
    numbers.push(n);
}
numbers.sort((a,b) => a-b);

console.log("Numbers in ascending order:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}