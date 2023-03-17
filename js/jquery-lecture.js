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
});
