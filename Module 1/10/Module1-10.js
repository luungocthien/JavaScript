'use strict';
let dice = parseInt(prompt('Enter number of dice roll: '));
let inputSum = parseInt(prompt('Enter the sum of dice rolled: '));
let count = 0
for (let i = 0; i < 10000; i++) {
    let sum = 0
    for (let d = 1; d <= dice; d++) {
        const getRandomInt = Math.floor(Math.random() * 6 + 1)
        console.log(sum)
        sum += getRandomInt
    }
    if (inputSum === sum) {
        count++
    }
}
const p = ((count / 10000).toFixed(4)) * 100
document.body.innerHTML += `<p>Probability to get sum ${inputSum} with ${dice} dice is ${p} %</p>`;