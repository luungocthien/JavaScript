'use strict';
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0 || year % 100 == 0 && year % 400 == 0);
}

function printLeapYears(startYear, endYear) {
    let leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
          leapYears.push(year);
        }
      }

      if (leapYears.length === 0) {
        document.body.innerHTML = 'No leap years in the interval.';
      } else {
        let ul = document.createElement('ul');

        for (let i = 0; i < leapYears.length; i++) {
          let li = document.createElement('li');
          li.textContent = leapYears[i];
          ul.appendChild(li);
        }

        document.body.appendChild(ul);
      }
    }
let startYear = parseInt(prompt('Enter the start year:'));
let endYear = parseInt(prompt('Enter the end year:'));
if (!isNaN(startYear) && !isNaN(endYear) && startYear <= endYear) {
      printLeapYears(startYear, endYear);
    } else {
      document.body.innerHTML = 'Invalid input.';
    }