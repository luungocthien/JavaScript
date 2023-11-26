'use strict';
let dogs = [];
for (let i = 0; i < 6; i++) {
    name = prompt(`Enter the name of dog number ${i+1} :`);
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

let unorderedlist = document.createElement("ul");
for (let i=0; i < 6; i++) {
    let listitem = document.createElement("li");
    listitem.textContent = dogs[i];
    unorderedlist.appendChild(listitem);
}

document.body.appendChild((unorderedlist));