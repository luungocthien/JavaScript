'use strict';
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let result = 0;
let dice = parseInt(prompt('Enter number of dice roll: '));

for (let i = 1; i <= dice; i++) {
    let roll = (getRandomInt(6) + 1);
    result = result + roll;
    console.log('Rolled a: ' + roll);
}
document.querySelector('#line0').innerHTML = 'Total from dice roll is: ' + result;
