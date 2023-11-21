'use strict';
const answer = confirm('Should I calculate the square root?');
if (answer == true) {
    let num = prompt('Enter the number');
    let result
    if (num >= 0) {
        result = Math.sqrt(num);
        document.querySelector('#line0').innerHTML = 'The square root of ' + num + ' is ' + result + '.'
    }
    else {
        document.querySelector('#line0').innerHTML = 'The square root of a negative number is not defined'
    }
}

else {
    document.querySelector('#line0').innerHTML = 'The square root is not calculated.';
}