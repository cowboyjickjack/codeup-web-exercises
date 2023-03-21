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
// // walkthrough version
// $('li').on('click', function (){
//     let $parentUl = $(this).parent();
//     $parentUl.find('li').first().css('color', 'blue');
// });

$('#state-parks-texas li').click('click', function (){
    $('#state-parks-texas li').first().css('color', 'blue');
});

$('#fictional-parks li').click('click', function (){
    $('#fictional-parks li').first().css('color', 'blue');
});

/** BONUS IMAGE TRAVERSAL **/

$('.swap-btn').on('click', function(){
    let btn = $(this).attr('id');
    let $commonParent = $(this).parents('.row');
    let $images = $commonParent.find('img');
    let imgSources = [];
    $images.each(function (){
        let srcValue = $(this).attr('src')
        imgSources.push(srcValue);
    });
    let firstImage = $images[0];
    console.log('image src array => ', imgSources);
    switch (btn) {
        case 'button1':
            // do the logic for left btn
            $($images[0]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[0]);
            console.log('clicked left btn')
            break;
        case 'button2':
            // do the logic for middle btn
            let randomNum = randomNumber(1, 2);
            if (randomNum === 1) {
                // go left
                $($images[1]).attr('src', imgSources[0]);
                $($images[0]).attr('src', imgSources[1]);
            } else {
                // go right
                $($images[1]).attr('src', imgSources[2]);
                $($images[2]).attr('src', imgSources[1]);
            }
            console.log('clicked middle btn')
            break;
        case 'button3':
            // do the logic for right btn
            $($images[2]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[2]);
            console.log('clicked right btn')
            break;
    }
});