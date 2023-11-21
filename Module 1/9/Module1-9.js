'use strict';
  let n = parseInt(prompt("Enter an integer:"));
  let c = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      c += 1;
    }
  }
let result = ""
  if (n === 1) {
    result =(`${n} is not a prime number`);
  } else if (c > 2) {
    result =(`${n} is not a prime number`);
  } else if (c === 2) {
    result =(`${n} is a prime number`);
  }
  else {
      document.body.innerHTML += `<p>Invalid input</p>`;
  }
  document.body.innerHTML += `<p>${result}</p>`;