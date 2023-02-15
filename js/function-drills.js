"use strict";

/** Challenge Function Drills
 *
 * - Write a function called `identity(input)` that takes in an argument called
 *   input and returns that input. */

const identity = input => {
    return input;
}

 /**
 *
 * - Write a function called `getRandomNumber(min, max)` that returns a random
 *   number between min and max values sent to that function call. */

 const getRandomNumber = (min, max) => {
     return parseInt(Math.random() * (max - min) + min);
 }

 /**
 * - Write a function called `first(input)` that returns the first character in the
 *   provided string. */

 const first = input => {

 }

/**
 * - Write a function called `last(input)` that returns the last character of a
 *   string
 *
 * - Write a function called `rest(input)` that returns everything but the first
 *   character of a string.
 *
 * - Write a function called `reverse(input)` that takes a string and returns it
 *   reversed.
 *
 * - Write a function called `isNumeric(input)` that takes an input and returns a
 *   boolean if the input is numeric.
 *
 * - Write a function called `count(input)` that takes in a string and returns the
 *   number of characters.
 *
 * - Write a function called `add(a, b)` that returns the sum of a and b
 *
 * - Write a function called `subtract(a, b)` that return the difference between
 *   the two inputs.
 *
 * - Write `multiply(a, b)` function that returns the product
 *
 * - Write a `divide(numerator, denominator)` function that returns a divided by b
 *
 * - Write a `remainder(number, divisor)` function that returns the remainder left
 *   over when dividing `number` by the `divisor`
 *
 * - Write the function `square(a)` that takes in a number and returns the number
 *   multiplied by itself.
 *
 * - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
 *   and your square function and not + or * operators
 *
 * - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
 *   first parameter is the name of the math function you want to apply. a and b
 *   are the two numbers to run that function on.
 */