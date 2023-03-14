"use strict"
// saves this node and everything we can do to in a variable
// recommended to console.log after defining a query selector, to ensure you're selecting the correct node

let clickMe = document.querySelector('#clickMe');
let allButtons = document.querySelectorAll('.btn'); // select class
// let myButton = document.querySelector('#btn'); // to select ID
let pageWrapper = document.querySelector('.page-wrapper');

// no advantage using getElements > querySelector
// let myButton = document.getElementsByClassName('btn');

/** DYNAMICALLY HITTING CONTENT **/

clickMe.innerText = 'Hello World!'; // changes the html
// clickMe.remove(); // removes it entirely

let btnColumn = document.querySelector('#btn-column');

/** add string HTML into the document **/
let newHTML =  `<button id="newButton">New Button</button>`

/** creating a node on the fly **/
let buttonNode = document.createElement('button');
buttonNode.classList.add('btn');
buttonNode.innerHTML = 'I am a new button!';

buttonNode.addEventListener('click', function () {
    alert(`IT'S WORKING!!!`);
})

// btnColumn.insertAdjacentHTML('afterbegin', newHTML);
// let newButton = document.querySelector('#newButton');

// allButtons.forEach(function (button) {
//     button.style.backgroundColor = 'blue';
// })

/** click to make bg red **/
clickMe.addEventListener('click', function () {
    pageWrapper.style.backgroundColor = 'black';
});

// clickMe.addEventListener('click', function () {
//     pageWrapper.classList.toggle('red');
// });


btnColumn.appendChild(buttonNode);

/** DOM EVENTS **/

const handleClick = input => {
    alert('Yay! You clicked me...');
}


// what if you add another button? it won't be included. So... change the logic...
// allButtons.forEach(function (element) {
//    element.addEventListener('click', handleClick);
// });

// this is like giving instructions to the managers of the buttons > the children, so they can inherit
btnColumn.addEventListener('click', function (e){
    if (e.target.classList[0] === 'btn') {
        alert('Yay! You clicked me!');
    }
});

// clickMe.addEventListener('click', handleClick);
// cannot remove event listener if function used is anonymous!!!
// clickMe.removeEventListener('click')

// this will run right after the previous event... BUT you cannot remove it!!
// clickMe.addEventListener('click', function () {
//     alert('Yay, Event Listener....');
// });
//
// clickMe.removeEventListener('click', handleClick);
btnColumn.appendChild(buttonNode);