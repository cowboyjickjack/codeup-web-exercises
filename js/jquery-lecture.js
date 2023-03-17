// jQuery("h3").click(function (){
//     $(this).next().slideToggle(500);
// });

// if you want to use an arrow function, you cannot use
// the 'this' keyword. In that case, you have to use
// event .currentTarget
// arrow functions do NOT understand 'this'.
// jQuery("h3").click((event)=>{
//     $(event.currentTarget).next().slideToggle(500);
// });
// OR
// jQuery("h3").click((event)=>{
//     $(event.target).next().slideToggle(500);
// });

// We can (and usually do) use '$' as shorthand for jQuery function
// $("h3").click(function (){
//     $(this).next().slideToggle(500);
// });

// If we ask our JS to access DOM elements but those elements have not loaded yet,
// then our JS can't access them. We can get around this by asking our JS to
// wait until the page has loaded.

// We can do this with the vanilla JS window.onload event

// function init() {
//     $("h3").click(function () {
//         $(this).next().slideToggle(500);
//     });
// }
//
// window.onload = init;

// ORRRR we can use the $(document).ready
$(document).ready(function (){
    $("h3").click(function () {
        $(this).next().slideToggle(500);
    });

    // jQuery selectors use CSS selectors syntax
    // this is similar to .innerText in JS
    // $("#library").text("jQuery is a JavaScript library");


    // get a reference to the element with the id of library
    // using a jQuery selector and storing it in a variable
    // I use the $ to mark this as a reference to a jQuery object
    //as opposed to a reference to a JS DOM node
    const $libraryReference = $("#library")
    // this is jQuery equivalent to
    const libraryReferenceJS = document.querySelector('#library');
    // use the reference to get the innerText of the element
    let libraryText = $($libraryReference).text();
    // output the innerText of the element to the console
    //     console.log(libraryText);
    // change the innerText of the element on the page
    $libraryReference.text(`${libraryText} is library`);
    // if I console.log libraryText, it still shows the unchanged text
    // bc it was stored in a variable prior to being change
    //     console.log(libraryText);
    // but if I use the .text() method to read the innerText again,
    // it shows the new (changed) innerText
    //     console.log($libraryReference.text());


    // jQuery class selector with .css method
    // to change the css of the selected element(s)
    // $(".framework").css('border', '1px solid black');
    // to change more than one css property at a time
    // $(".framework").css({
    //     'border': '1px solid black',
    //     'width': 'fit-content',
    //     'padding': '4px',
    //     'border-radius': '5px',
    //     'margin-bottom': '5px'
    // })
    //
    // $('p, li').text('jQuery takes over').css('color', 'darkred');
});

/** EXERCISES FROM INTRO TO JQUERY **/
// alerts when DOM finishes loading
// $(document).ready(function (){
//     alert("page has loaded - enjoy!");
// })

// animate the cat photo
$("#cat").click(function (){
    $('#cat').animate({
        // opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 1000, function() {
        // Animation complete.
    });
});

// id selectors
// $('#selectors-title').text('What? How did I get here..?').css({
//     'font-size': '40px',
//     'display': 'flex',
//     'align-text': 'center',
//     'color': 'darkred'
// });

//class selectors
// $('.codeup').css({
//     'border': '1px solid red',
//     'border-radius': '10px',
// });

// element selectors
$('ul').css({
    'padding': '0px'
});

$('li').css({
    'font-size': '20px',
    'list-style': 'none',
    'text-align': 'center',
});

// multiple selectors
$('h1, p, li').css({
    'background-color': 'yellow'
});

