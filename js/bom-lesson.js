"use strict"

let count = 0;
let max = 10;
let interval = 1000; //only runs in milliseconds

// let intervalID = setInterval(function() {
//     if (count >= max) {
//         clearInterval(intervalID);
//         console.log('All Done!');
//     } else {
//         count++;
//         console.log('Repeatingn this line ' + count);
//     }
// }, interval);

// console.log(`5 seconds starts now!`);
// setTimeout(function (){
//     console.log(`It's been 5 seconds!`);
// }, 5000);

// .href will forward user to a desired page
setTimeout(function (){
    window.location.href = "https://google.com";
}, 10000);
