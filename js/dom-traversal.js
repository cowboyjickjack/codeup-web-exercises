"use strict"

$('.box').on('click', function (){
    // hide boxes in the OTHER container
    // .parents crawls up the relationships, and put what you're looking for inside
    // .siblings will crawl through the siblings, laterally
   $(this).parents('.container').siblings('.container').find('.box').fadeToggle();
   // .find traverses back down
});

// crawling UP the DOM
$('#box1').parents('.container');

// crawling DOWN the DOM
$('#box1').find(); // will keep crawling down, even past great-great grandchildren
$('#box1').children();

// crawling SIDEWAYS on the DOM
$('#box1').siblings();

// utility methods... (use cases are more isolated)
$('#box1').closest(); // could be child, sibling, parent, etc. CAN BE DANGEROUS

$('.dropdown-toggle').on('click', function (){
   $(this).parents('.dropdown-parent').toggleClass('open');
});

$('.box').first().css('background-color', 'blue'); // or .last

$('.column:nth-child(4) .box').first().css('background-color', 'blue'); // for specific child

