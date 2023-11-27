'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target');
let code = '';
for (let i = 0; i < names.length; i++) {
    code += `<li>${names[i]}</li>`;
}
target.innerHTML = code;