"use strict"
// saves this node and everything we can do to in a variable

let clickMe = document.querySelector('#clickMe');
let myButton = document.querySelectorAll('.btn'); // select class
// let myButton = document.querySelector('#btn'); // to select ID

// no advantage using getElements > querySelector
// let myButton = document.getElementsByClassName('btn');

/** DYNAMICALLY HITTING CONTENT **/

clickMe.innerText = 'Hello World!'; // changes the html
// clickMe.remove(); // removes it entirely

let btnColumn = document.querySelector('#btn-column');

btnColumn.insertAdjacentHTML('afterbegin', '<p>New HTML Element</p>');