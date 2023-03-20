"use strict";

const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
const konamiCodePositioner = 0;

// keydown recognition
$(document).keydown(function(e) {
    console.log(e.keyCode);
    if (e.keyCode == konamiCode) {
        alert('99 LIVES ADDED!!!');
    }
});



