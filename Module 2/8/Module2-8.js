'use strict';
function concat(array) {
    let concatenatedString = "";
    for (let i = 0; i < array.length; i++) {
        concatenatedString += array[i];
    }
    return concatenatedString;
}

let names = ["Johnny", "DeeDee", "Joey", "Marky"];
let string = concat(names);
let paragraph = document.createElement("p");
paragraph.textContent = string;

document.body.appendChild(paragraph);