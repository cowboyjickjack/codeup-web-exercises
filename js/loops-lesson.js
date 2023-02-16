"use strict";

/** While CONDITION is `true`, it will continue to run, until `false`.
 * an infinite loop can be dangerous - it can cause programs, browsers, and servers to crash! */
// `i` stands for incrementor

/** Log every loop */
// let i = 1;
// while (i <= 10) {
//     console.log(`Loop #${i}.`);
//     i++;
// }

/** Log only even numbers in loop*/
// while (i <= 10) {
//     if (i % 2 === 0) {
//         console.log(`Loop #${i}`); // if you want to see each loop, put incrementor in console log
//     }
//     i++;
// }

/** Do-While Loop: only different from a while in that the condition is evaluated at the end of the loop instead of the beginning. */
// do {
//     console.log(`Loop #${i}`);
//     i++;
// } while (i <= 10);

/** For loop Basic Syntax (requires: initializer, condition, and increment) */
// What's in () will repeat itself
// for (let i = 1; i <= 10; i++) {
//     console.log(`Loop #${i}`);
// }

//1. Use a loop to print all the numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//2. Use a for loop to calculate the factorial of 5. (i.e., 5 * 4 * 3 * 2 * 1)
const getFactorial = num => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(result);
    return result;
}

//3. Use nested loops to print a pyramid pattern :)
const buildPyramid = (rows) => {
    let pyramid = "";
    // loop through rows
    for (let i = 1; i <= rows; i++) {
        let row = "";
        // Loop to add spaces
        for (let j = 1; j <= rows - i; j++) {
            row+="  ";
        }
        // Loop to add asterisks (can use j again bc the previous loops is closed)
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "* ";
        }
        pyramid += `\n${row}`;
        // console.log(row);
    }
    return pyramid;
}

console.log(buildPyramid(5));
