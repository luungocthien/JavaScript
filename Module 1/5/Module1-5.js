'use strict';
let year = parseInt(prompt('Enter the year: '));
if (year % 4 == 0 && year % 100 != 0 || year % 100 == 0 && year % 400 == 0) {
    document.querySelector('#line0').innerHTML = year + ' is a leap year.';
}
else {
    document.querySelector('#line0').innerHTML = year + ' is not a leap year.';
}