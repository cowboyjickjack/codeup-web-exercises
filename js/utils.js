"use strict";

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
