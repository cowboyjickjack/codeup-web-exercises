"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

const isTrue = input => {
    return input === true;
}

const isFalse = input => {
    return input === false;
}

const not = input => {
    return !input;
}

const addOne = num => {
    return (parseFloat(num) + 1);
    //return ++input;
}

const isEven = number => {
    return (parseFloat(number) % 2 === 0);
}

const isIdentical = (input1, input2) => {
    return (input1 === input2)
}

const isEqual = (num1, num2) => {
    return num1 == num2;
}

const or = (input3, input4) => {
    return input3 || input4;
}

const and = (input5, input6) => {
    return input5 && input6;
}

const concat = (input7, input8) => {
    return input7.toString() + input8.toString();
}
