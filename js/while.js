"use strict";

// Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// const squareLoop = num => {
//     let i = 2
//     while (i <= 65536) {
//         // let byTwo =
//         console.log(`This number is: ${i}`);
//         i *= 2; // ascending by two rather that i++ by one
//     }
// }

/** WALKTHROUGH */
// WHAT DO WE SEE?
// iterates 16 times
// accumulator continuously multiplies by 2
// don't need 1 for math, but to ensure it runs 16 times

// let i = 1;
// while (i <= 16) {
//     console.log(Math.pow(2, i));
//     i++;
// }

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// do {
//     //body
// } while(/*condition*/);

// let i = 10;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

/** WALKTHROUGH OF THE ICE CREAM MENACE */

// An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing
// the amount of cones to sell before you start your loop. Inside the loop your code should generate another random
// number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.
let conesInventory = randomNumber(50, 100);
do {
    let conesWanted = randomNumber(1, 5);
    if (conesWanted > conesInventory) {
        console.log(`I cannot sell you ${conesWanted}, I only have ${conesInventory}`);
        console.log(`${conesInventory} sold...`); // this line makes sure she doesn't kick ppl out, but rather...
        // says `I don't have 5 cones, but I have 3, want 3? and she sells 3.
        conesInventory = 0; // this meets the condition to get out

    } else {
        console.log(`${conesWanted} sold...`);
        conesInventory -= conesWanted; // this is the iterator - will eventually prove false and let us out!
    }
    console.log(`${conesInventory} left.`);

} while (conesInventory > 0);
console.log(`Yay! I've sold them all!`);
// could do a condition that conesInventory = 0
// but outside the loop is 0, too

/** UGLY VERSION - FOR LOOPS */

