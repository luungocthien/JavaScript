'use strict';
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let diceRolls = [];

let result;
do {
    result = rollDice();
    diceRolls.push(result);
} while (result !== 6);

let unorderedList = document.createElement("ul");
for (let i = 0; i < diceRolls.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `Roll ${i + 1}: ${diceRolls[i]}`;
    unorderedList.appendChild(listItem);
}

document.body.appendChild(unorderedList);