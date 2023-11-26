'use strict';

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let side = parseInt(prompt("Enter the sides the dice:"));

let diceRolls = [];
let result;
do {
    result = rollDice(side);
    diceRolls.push(result);
} while (result !== side);

let unorderedList = document.createElement("ul");
for (let i = 0; i < diceRolls.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `Roll ${i + 1}: ${diceRolls[i]}`;
    unorderedList.appendChild(listItem);
}

document.body.appendChild(unorderedList);