"use strict";

// let fruits = [`bananas`, `apples`, `oranges`, `mangos`, `tomatoes`];

// let var1 = fruits[2] // selects oranges, starts at 0
// console.log(var1);

// let numberOfFruits = fruits.length; // outputs 5, counting like a human
// // console.log(`The number of fruits => `, numberOfFruits);
//
// let fruitsString = fruits.toString();
// console.log(`Using toString() on fruits => `, fruitsString);
//
// /** Arrays can hold ALL data types! */
//
// let fruitsAndNumbers = [`bananas`, 2, `apples`, 8675309, undefined, NaN, null];
// console.log(fruitsAndNumbers);
//
const returnString = input => {
    return input;
}

/** Functions can only return data types, so you can only call the function in an array */

let stringsList = [returnString(`Jason`), returnString(`Javier`), returnString(`Yamba`)];
console.log(`stringList follows => `, stringsList);

/** Looping through arrays */
/** Console.log each item in an array */
/** for loops are for predetermined amount of loops */
/** REMEMBER: `i` will start at 1, so you need to correct that in a loop
 * SO either start with 0 and remove <= and input (<= will output undefined) < */

// for (let i = 0; i < fruits.length; i++) { // i + i = 1
//     let fruit = fruits[i]; // OR resolve it inside [i -1] if i = 1
//     console.log(fruit);
// }

/** For-each Loop: Method that calls a function with specific parameters */
/** inside function:
 * element: string (singular of whatever you're doing),
 * index: number(position in array),
 * array: string (optional, but can't use what you don't declare.) */

/** Traditional (NO variable name!) */

// fruits.forEach(function(fruit, i, array) {
//     console.log(`The element follows: `, fruit);
//     console.log(`The index follows: `, i);
//     console.log(`The array follows: `, array);
// });

/** Arrow function (NO variable name!) */

fruits.forEach((fruit, i, array) => {
    console.log(`The element follows: `, fruit);
    console.log(`The index follows: `, i);
    console.log(`The array follows: `, array);
});

/** forEach: executes a provided function once for each array element */

// let favoriteFruits = [];
// fruits.forEach((fruit, i, array) => {
//     if ( fruit === `apples` || fruit === `tomatoes`) {
//         favoriteFruits.push(fruit);
//     }
// });
// console.log(favoriteFruits);

/** Listing seating arrangement */

// let studentSeating = [
//   [`Bob`, `Joe`, `Jill`],
//   [`Carl`, `Bill`, `John`]
// ];

// studentSeating.forEach((row) => { // forEach calls row.forEach as a function
//     row.forEach((student) => {
//         console.log(student);
//     })
// });
