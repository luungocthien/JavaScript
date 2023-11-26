'use strict';
const numbers = [];

for (let i = 0; i < 5; i++) {
    let n = prompt(`Enter number ${i+1}`);
    numbers.push(parseFloat(n));
}

console.log('Number in reversed order: ');
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}