"use strict"

// jQuery selector (not node, but a jQuery object)
let jQueryParent = $('#paragraphParent');
// jQueryParent.style.color = 'red'; // this won't work!!

// Vanilla JS equivalent
let vanillaParent = document.querySelector('#paragraphParent');
// vanillaParent.style.color = 'red'; // BUT this will

// '$' is just a reminder that it's jQuery
// change one css property
// $(jQueryParent).css('color', 'red');

// OR change a bunch of them!
// if dash is present, remove and camel case
// $(jQueryParent).css({
//     'fontWeight': 'bold',
//     'fontSize': '20px',
//     'textTransform': 'uppercase',
//     'fontStyle': 'italic'
// });

// adding classes with jQuery
// $(jQueryParent).addClass('highlight');

// getting more than one element, you can run the same methods
// let $paragraphs = $('p');
// $paragraphs.css('color', 'blue');

// vanilla JS
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function (element){
    element.style.color = 'blue';
})