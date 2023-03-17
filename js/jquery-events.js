/** Vanilla JS Event Listener: **/
// document.querySelector('#clickme').addEventListener('click', function (){
//     alert(`We can't go home early :(`);
// });

/** jQuery Event Listener:
 * remember: you can only use arrow functions if you are not using the 'this' keyword
 * easier to just use traditional function **/
$('#clickme').click(()=> alert(`It would be nice, but no go...`));

$('.box').hover(
    function (){
        $(this).css('background-color', '#17a206');
    },
    function (){
        $(this).css('background-color', '#b41212');
    }
);

/** Event Exercises: **/
/** Change bg-color when clicked: **/
$('h1').click(function (){
    $(this).css('background-color', '#6269c2');
});

/** Change font-size when double-clicked: **/
$('p').dblclick(function (){
    $(this).css('font-size', '24px');
});

/** Change li color to red when hovering,
 * then back to black: **/
$('li').hover(
    function (){
        $(this).css('color', '#ff0000');
    },
    function (){
        $(this).css('color', '#FFF');
    }
);

