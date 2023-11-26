'use strict';
let guestlist = [];

let n = parseInt(prompt('Enter the number of participants: '));

for (let i = 0; i < n; i++) {
    name = prompt(`Enter name of guest number ${i+1}:`);
    guestlist.push(name);
}

guestlist.sort();

let orderedlist = document.createElement("ol");
for (let i=0; i < n; i++) {
    let listitem = document.createElement("li");
    listitem.textContent = guestlist[i];
    orderedlist.appendChild(listitem);
}

document.body.appendChild((orderedlist));