"use strict"

let count = 0;
let max = 10;
let interval = 1000; //one second in milliseconds

let interValid = setInterval(function() {
    console.log('Console logging every second')
}, interval);

// typing clearInterval(function used) will stop the interval in it's tracks