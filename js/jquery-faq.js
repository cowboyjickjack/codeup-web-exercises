"use strict"

let $question = $('dt');
let $answer = $('dd');

$('#faq-button').click('toggle', function (){
    $answer.toggleClass('invisible');
});

$question.click('toggle', function (){
    $(this).toggleClass('highlight');
});

$question.on('click', function (){
    $(this).next().fadeToggle();
})

$('#list-button').click('toggle', function (){
    $('#definition-list').find('ul li:last-child').toggleClass('highlight');
});

$('h3').click('toggle', function (){
    let $nextUl = $(this).next();
    $nextUl.find('li').toggleClass('bold');
});

$('#national-parks li').click('click', function (){
    $('#national-parks li').first().css('color', 'blue');
});

$('#state-parks-texas li').click('click', function (){
    $('#state-parks-texas li').first().css('color', 'blue');
});

$('#fictional-parks li').click('click', function (){
    $('#fictional-parks li').first().css('color', 'blue');
});

/** BONUS IMAGE TRAVERSAL **/

$('#button1').click(function(){
    $(this).attr('cat-img2', $('#cat-img1').css('background-color', 'red'));
});