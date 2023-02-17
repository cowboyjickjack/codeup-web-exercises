"use strict";

/** CMD + CONTROL + G = when clicking a console.log, will highlight all console logs */

/** Generates random number between 2 numbers */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/** Matches types of input */
const isTypeMatch = (input1, input2) => {
    return (typeof input1 === typeof input2);
}

/** Finds the longest string */
const findLongestString = (input1, input2) => {
    if ((typeof input1 !== `string`) && (typeof input2 !== `string`)) {
        return ("");
    } else if (input1.length > input2.length) {
        return input1;
    } else if (input1.length < input2.length) {
        return input2;
    } else if (typeof input1 !== `string`) {
        return input2;
    } else if (typeof input2 !== `string`) {
        return input1;
    }
}

/** Returns the factor of 2 numbers */
const isFactor = (num1, num2) => {
    if (parseFloat(num2) % parseFloat(num1) === 0) {
        return true;
    } else if (parseFloat(num2) % parseFloat(num1) !== 0) {
        return false;
    }
}

/** List out arrays, each on a new row */
let fruits = [`bananas`, `apples`, `oranges`, `mangos`, `tomatoes`];

for (let i = 0; i < fruits.length; i++) { // i + i = 1
    let fruit = fruits[i]; // OR resolve it inside [i -1] if i = 1
    console.log(fruit);
}

/** Creates an array of random numbers of a predetermined size */
const arrayOfRandomNumbers = lengthOfArray => {
    // const array = new Array(LengthOfArray); //could use this
    const array = [];
    for (let i = 0; i < lengthOfArray; i++) {
        let newRandomNumber = randomNumber(1, lengthOfArray + 100); // we generate it
        while(array.includes(newRandomNumber)) {  // a loop will only run if this generates a duplicate
            newRandomNumber = randomNumber(1, lengthOfArray + 100);
        }
        array.push(randomNumber(1, 100));
    }
    return array;
}

/** Shuffle Array */
function shuffleArray(array) {
    // Loop through the array from the last index to the first
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the elements at index i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Return the shuffled array
    return array;
}

/** Fahrenheit to celsius conversion */
const convertToCelcius = temp => {
    let celciusConversion = (temp - 32) * (5/9);
    return (celciusConversion);
}