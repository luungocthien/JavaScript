'use strict';
const target = document.querySelector('#target');
const listitem = '<li>First item</li>' +
                   '<li>Second item</li>' +
                   '<li>Third item</li>';

target.innerHTML = listitem;
target.classList.add('my-list');