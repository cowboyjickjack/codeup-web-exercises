"use strict";

/** Keymap **/
let allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    13: 'enter'
};

let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];
let konamiCodePosition = 0;

/** console logs keydowns **/
$(document).keydown(function (e){
    console.log(e.keyCode);
});

/** Event Listener **/
document.addEventListener('keydown', function(e) {
    // value of keycode for keymap
    let key = allowedKeys[e.keyCode];
    // value of required key for code
    let requiredKey = konamiCode[konamiCodePosition];
    // compare the key with required key
    if (key == requiredKey) {
        // move to next key in konami code
        konamiCodePosition++;
        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

/** browser pre-activation **/

// $(document).ready(function (){
//     let nyanCat = {
//         backgroundImage: "url('/images/nyan-cat.gif')", backgroundRepeat: 'none'
//     };
//     document.body.style.backgroundImage = nyanCat;
// });

$('h1').click(function (){
    $(this).css({
        color: 'red',
    })
});

/** fun time activations **/
function activateCheats() {

    $('h1').click((function (){
        $(this).css({
            color: '#0edc0e',
        })
    }));


    alert("30 LIVES ADDED!!!");
};




