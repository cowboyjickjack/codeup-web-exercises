"use strict";

// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

// const onlyOddNumbers = num => {
//     let userInput = prompt(`Please input a number:`);
//     for (let i = 1; i < 50; i++) {
//         if (i == userInput) {
//             console.log(`Yikes! Skipping number: ${userInput}`);
//             continue;
//         } if (i % 2 === 0) {
//             continue; {
//             }
//         } console.log(`This is an odd number: ${i}`);
//     }
// }

/** WALKTHROUGH */
// this loop will keep asking unless the user inputs a proper input
let userPrompt // blockscoped!! - to get around, reassign inside
// cant use a for loop bc there is no predetermined stopping point
while (true) { // TRUE in WHILE loop = is dangerous and will run 4ever
    userPrompt = parseInt(prompt(`Please input an odd number between 1 and 49.`)); // it is reassigned
    if (userPrompt % 2 !== 0 && userPrompt >= 1 && userPrompt <= 50) {
        break; // cannot skip, otherwise, endless loop
    }
}
// console.log(userPrompt)

for (let i = 1; i <= 49; i += 2) { // i + 2 would be reassigning i and give an endless loop
    if (i === userPrompt) {
        console.log(`Yikes! Skipping number ${i}.`);
        // continue; // doesn't kill entire loop, just this iteration
    } else { // else > continue
        console.log(`Here is an odd number: ${i}.`); // can also do else statement
    }
}




