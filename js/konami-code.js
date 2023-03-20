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

function activateCheats() {
    document.body.style.backgroundImage = "url('')";

    alert("30 LIVES ADDED!!!");
}

