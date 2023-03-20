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


// getting more than one element, you can run the same methods
// the multiple selection is also nice to avoid making a loop
let $paragraphs = $('p');
$paragraphs.css('color', 'blue');

// vanilla JS
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function (element){
    element.style.color = 'blue';
    // setting/getting new attribute in vanilla JS
    element.setAttribute('data-name', 'value');
    let paragraphValue = element.getAttribute('data-name');
});

// jQuery setting value
$paragraphs.attr('data-name2', 'really anything');
// jQuery getting value
let newParaValue = $paragraphs.attr('data-name2');

// .text SETS new text
$paragraphs.text('This is the new text inside the element!');
// no argument, .text GETS the text
let paraText = $paragraphs.text();

// adding a class to elements
$paragraphs.addClass('highlight');
// removing a class from elements
$paragraphs.removeClass('highlight');

// jQuery toggling a class on/off
$paragraphs.on('click', function (){
    $(this).toggleClass('highlight');
    // $(this).animate({
    //     opacity: 0.25
    // }, 3000, function (){
    //     //animation complete
    // });
});