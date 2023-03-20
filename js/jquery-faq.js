"use strict"

let $question = $('dt');
let $answer = $('dd');

$('button').click('toggle', function (){
    $answer.toggleClass('invisible');
});

$question.click('toggle', function (){
    $(this).toggleClass('highlight');
});

