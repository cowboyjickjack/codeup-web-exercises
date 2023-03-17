jQuery("h3").click(function (){
    $(this).next().slideToggle(500);
});

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