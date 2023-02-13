"use strict";

/**
 * If/ Else If/ Else statements
 */

// let flavor = prompt(`Welcome to Codeup Ice Cream!
// What flavor do you want?`);

// if (flavor === `chocolate`) {
//     alert(`One chocolate coming right up!`);
// } else if (flavor === `vanilla`) {
//     alert(`Vanilla, you got it!`);
// } else {
//     alert(`We don't have that flavor - sorry! :(`);
// }

/**
 * Switch Statements: good for simple values, but not good for conditional text.
 */

// switch (flavor.toLowerCase()) { // toLowerCase catches any accidental capitalization
//     case `chocolate`:
//         alert(`Chocolate, coming up!`);
//         break;
//     case `vanilla`:
//         alert(`One Vanilla, coming up!`);
//         break;
//     case `strawberry`:
//         alert(`Got it, strawberry - coming up!`);
//         break;
//     default:
//         alert(`We don't have that flavor - sorry! :(`);
// }

// const serveIceCream = (flavor) => {
//     if (flavor === `chocolate`
//     || flavor === `vanilla`
//     || flavor === `strawberry`) {
//         alert(`One ${flavor} comin' right up!`);
//     } else {
//         alert(`We don't have that flavor - sorry! :(`);
//     }
// }
//
// serveIceCream(prompt(`Welcome to Codeup Ice Cream!
// What flavor do you want?`).toLowerCase());

// const divisibleByFive = num => { // one parameter, don't need parenthesis
//     if (num % 5 === 0) {
//         console.log(`Divisible by 5!`);
//     } else {
//         console.log(`NOT divisible by 5!`);
//     }
// }

/**
 * Ternary: basically one lines If/Else statement (mini function), can have ternary = variable (AVOID NESTED TERNARIES)
 */

// const divisibleByFiveTernary = number => {
//     number % 5 === 0 ? console.log(`Divisible by 5!`) :
//         console.log(`NOT divisible by 5!`);
// }

// const divisible = (dividend, divisor) => {
//     dividend % divisor === 0 ? console.log(`Divisible by ${divisor}!`) :
//         console.log(`NOT divisible by ${divisor}!`);
// }

/**
 * divisor returns true/false
 */

const divisible = (dividend, divisor) => {
    return dividend % divisor === 0;
}