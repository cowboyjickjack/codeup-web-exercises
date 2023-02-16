"use strict";

/** BREAK DOWN PROBLEMS PIECE BY PIECE!!! */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// const showMultiplicationTable = num => {
//     let i = 1;
//     while (i <= 10) {
//         let result = num * i;
//         console.log(`${num} * ${i} = ${result}`);
//         i++;
//     }
// }

/** WALKTHROUGH */
const showMultiplicationTable = num => {
    let table = ``;
    //// THIS IS WHERE WE MAKE OUR MONEY
    for (let i = 1; i <= 10; i++) {
        //console.log(i);
        let daMath = parseInt(num) * i;
        let output = `${num} * ${i} = ${daMath}\n`; // \n = new line
        table += output // (table = table + output)
    }
    return table;
}


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even.
// const genRandomNumbers = num => {
//     for (let i = 1; i < 10; i++) {
//         let random = randomNumber(20,200);
//         if (random % 2 === 0) {
//             console.log(`${random} is even!`);
//         } else {
//             console.log(`${random} is odd!`);
//         }
//     }
// }

/** WALKTHROUGH */

for (let i = 1; i <= 10; i++) { // do a loop 10 times
    let myRandomNum = randomNumber(20, 200);
    if (myRandomNum % 2 === 0) { // if myRandomNum is even
        //console.log(`${myRandomNum} is even.`);
    } else { // else it is odd
        //console.log(`${myRandomNum} is odd.`);
    }
}

// 4. Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// const buildNumberPyramid = rows => {
//     let n = 9; // height of pyramid??
//     let string = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             string += i;
//         }
//         string += "\n";
//     }
//     console.log(string);
// }

/** WALKTHROUGH */
for (let i = 0; i < 9; i++) { // 0 to account for the black space, as 1 * 1 is one space
    let output = `${i + 1}`
    // loop again with i as my declaration. condition is >= 0. decrement
    for (let j = i; j > 0; j--) {
        let moNumbers = `${i + 1}`;
        output += moNumbers;
    }
    //console.log(output);
}

/** SPACE MAGIC METHOD (only for strings) */
// for (let i = 1; i < 10; i++) {
//     let output = `${i}`.repeat(i);
//     console.log(output);
// }

// 5. Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

/** DONT NEED TO KNOW SYNTAX, NEED TO KNOW PATTERNS!
 * WALKTHROUGH */
// const descend = rows => {
//     for (let i = 100; i >= 5; i -= 5) { // (i = i - 5)
//         console.log(i);
//     }
// }

for (let i = 100; i > 0; i -= 5) { // pattern we see is -5 each time.
    //console.log(i);
}





