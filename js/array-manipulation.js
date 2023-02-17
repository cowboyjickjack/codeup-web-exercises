"use strict";

/** MANIPULATING ARRAYS */

let daysOfWeek = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

const myName = `Gabriella`;
const sPosition = myName.indexOf(`a`); // starts from 0
// console.log(sPosition);

// const myNameArray = myName.split(``); // turns string into an array
// console.log(myNameArray);

// const thursday = daysOfWeek.indexOf(`Thursday`);
// console.log(thursday);

// const removeSunday = daysOfWeek.pop(); // removes last item in an array
// console.log(daysOfWeek); // if you input removeSunday, `Sunday` pops up alone

// const removeFirst = daysOfWeek.shift(); // removes first item in an array
// console.log(daysOfWeek)
// console.log(removeFirst);

/** SLICING */

// const firstHalf = daysOfWeek.slice(0, 3); // can save a new array to a new variable from the array
// console.log(daysOfWeek);
// console.log(firstHalf); // grabs a piece and saves it into something

/** SLICING FROM MIDDLE WITHOUT LOOP */
// REDO

// let indexOfThursday = daysOfWeek.indexOf(`Thursday`);
// let lastHalf = daysOfWeek.slice(indexOfThursday, + 1);
// let firsthalf = daysOfWeek.slice(0, indexOfThursday);
// daysOfWeek = daysOfWeek.slice(0, indexOfThursday).join(`,`);
// daysOfWeek += lastHalf.join(`,`);
// daysOfWeek = daysOfWeek.split(`,`);
// console.log(daysOfWeek);

/** SPREAD OPERATOR */
// daysOfWeek = [ // to add in things to an array, or combine two arrays
//     ...firsthalf,
//     ...lastHalf,
//     `Merrellday`
// ]
// console.log(daysOfWeek);

/** SPLICE - to remove something from an array, and even replace it, doesn't give undefined! */
// daysOfWeek.splice(indexOfThursday, 1, `Merrellday`); // don't need to replace, which is Merrellday
// console.log(daysOfWeek);

/** OTHER METHODS */
// console.log(daysOfWeek.sort()); // alphabetically
// console.log(daysOfWeek.reverse()); // reverses
// daysOfWeek.push(`Merrellday`); // pushes value to the end
// console.log(daysOfWeek);
// daysOfWeek.unshift(`Merrellday`); // pushes value to the beginning
// console.log(daysOfWeek);
// let stringDays = `Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday`; // STRINGS take up less data than ARRAYS
// let arrayDays = stringDays.split(`|`); // splitting string into array
// console.log(arrayDays);
// console.log(arrayDays.join(`,`)); // joins as a string

let discordName1 = `[GUILD]Jason`;
let discordName2 = `Jason[GUILD]`;

// console.log(discordName1.split(`[GUILD]`.join(``)));








