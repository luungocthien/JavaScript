'use strict';
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let name = prompt('Enter your name: ');
let n = getRandomInt(4)
if (n == 0) {
    document.querySelector('#line0').innerHTML = name + ', you are Gryffindor.';
}
else if (n == 1) {
    document.querySelector('#line0').innerHTML = name + ', you are Slytherin.';
}
else if (n == 2) {
    document.querySelector('#line0').innerHTML = name + ', you are Hufflepuff.';
}
else if (n == 3) {
    document.querySelector('#line0').innerHTML = name + ', you are Ravenclaw.';
}
