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
    $('li').toggleClass('highlight');
});

$('h3').click('toggle', function (){
    $('li').toggleClass('bold');
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
    $('#cat-img1').attr('#cat-img2');
});