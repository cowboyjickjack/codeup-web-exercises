"use strict";

/** Generates random number between 2 numbers */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/** Matches types of input */
const isTypeMatch = (input1, input2) => {
    return (typeof input1 === typeof input2);
}