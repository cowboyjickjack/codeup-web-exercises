// "use strict";

/**
 * TODO:
 * Go over `isVowel` function */

/** Make a function named `isOdd(number)` */
const isOdd = num => {
    if (num % 2 !== 0) {
        return `${num} is odd`;
    } else {
        return `${num} is even`;
    }
}

/** - Make a function named `isEven(number)` */
const isEven = num => {
    if (num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}

 /** Make a function named `identity(input)` that returns the input exactly as
 provided. */
 const indentity = input => {
     return input;
 }

 /** Make a function named `isFive(input)` */

 const isFive = num => {
     if (num === 5 || num === -5) {
         return true;
     } else {
         return false;
     }
 }

 /** Make a function named `addFive(input)` that adds five to some input. */
 function addFive(num) {
     return (num + 5);
 }

 /** Make a function named `isMultipleOfFive(input)` */
 const isMultipleOfFive = num => {
     if (num % 5 === 0) {
         return true;
     } else {
         return false;
     }
 }

 /** Make a function named `isThree(input)` */
 const isThree = num => {
     if (num === 3 || num === -3) {
         return true;
     } else {
         return false;
     }
 }
 /** Make a function named `isMultipleOfThree(input)` */
 const isMultipleOfThree = num => {
     if (num % 3 === 0) {
         return true;
     } else {
         return false;
     }
 }

 /** Make a function named `isMultipleOfThreeAndFive(input)` */
 const isMultipleOfThreeAndFive = num => {
     if (num % 3 === 0 && num % 5 === 0) {
         return true;
     } else {
         return false;
     }
 }

 /** Make a function named `isMultipleOf(target, n)` which checks if target is
 evenly divisible by `n` */
 function isMultipleOf (target, n) {
     if (target % n === 0) {
         return true;
     } else {
         return false;
     }
 }

 /** Make a function named `isTrue(boolean)` */
 function isTrue (boolean) {
     if (boolean === true) {
         return true;
     } else {
         return false;i
     }
 }

 /** Make a function named `isFalse(boolean)` */
 function isFalse (boolean) {
     if (boolean !== true) {
         return true;
     } else {
         return false;
     }
 }

 /** Make a function named `isTruthy(input)`, remember that values other than true
 will behave like true */
 const isTruthy = input => {
     return Boolean(input);
 }

 /** Make a function named `isFalsy(input)`, remember that values other than false
 behave like false */
 const isFalsy = input => {
     return !Boolean(input);
 }

 /** Make a function named `isVowel(letter)` REVIEW LATERRRRRRR*/
 function isVowel (input) {
     let vowels = [`a`, `e`, `i`, `o`, `u`];

 }

/** Make a function named `isConsonant(letter)` */
 /** Make a function named `isCapital(letter)` */
 /** Make a function named `isLowerCase(letter)` */
 /** Make a function named `hasLowerCase(string)` that returns if a string has any
 lower cased letter */
 /** Make a function named `isSpace(letter)` that returns if a character is a space
 character */
 /** Make a function named `isZero(number)` */
 /** Make a function named `notZero(input)` that returns true if the input is not
 zero */
 /** Write a function named `lowerCase(string)` */
 /** Write a function named `double(n)` that returns a number times two */
 function double(n) {
     return n * 2;
 }

 /** Write a function named `triple(n)` that returns a number times 3 */
 const triple = n => {
     return n * 3;
 }

 /** Write a function named `quadruple(n)` that returns a number times 4 */
 const quadruple = n => {
     return n * 4;
 }

 /** Write a function named `half(n)` that returns 1/2 of the provided input */
 const half = n => {
     return parseFloat(n / 2);
 }

/** Write a function named `subtract(a, b)` that returns `a` minus `b` */
const subtract = (a, b) => {
    return (parseFloat(a) - (b));
}

/** Write a function named `multiply(a, b)` that returns the product of `a` times
 `b` */
function multiply (a, b) {
    return a * b;
}

/** Write a function named divide(a, b) that returns `a` divided by ~b~ */
const divide = (a, b) => {
    return a / b;
}

/** Write a function named `remainder(a, b)` that returns the remainder after
 dividing a by b */
function remainder (a, b) {
    return a % b;
}

 /** Make a function named `modulo(a, b)` that returns the remainder
 after dividing a by b */



 /** Write a function named `cube(n)` that returns n * n * n */
 const cube = n => {
     return Math.pow(n, 3);
}

 /** Write a function named `squareRoot(n)` that returns the square root of the
 input */

 const squareRoot = num => {
     return Math.sqrt(num);
 }
 /** Write a function named `cubeRoot(n)` that returns the cube root of the input */
 const cubeRoot = num => {
     return Math.cbrt(num);
 }

 /** Write a function named `invertSign(number)` that returns a negative version of
 a postive number, a positve version of negative, and false for all else. */
 function invertSign(num) {
     if (num * 1 === num) {
         return -num;
     } else if (num * -1 === -num){
         return num;
     } else {
         return false; // define all else... strings, NaN, etc?
     }
 }

 /** Write a function named `degreesToRadians(number)` */
 function degreesToRadians(degrees) {
     return degrees * (Math.PI / 180);
 }

 /** Write a function named `radiansToDegrees(number)` */
const radiansToDegrees = radians => {
    return radians * (180 / Math.PI);
 }

 /** Make a function named `isBlank(input)` that determines if a given input is
 spaces, newline characters, or tabs.
 /** Make a function named `trim(string)` that removes empty spaces before and
 after the input.
 /** Make a function named `areEqual(input1, input2)` that returns if both inputs
 have the same value
 - Make a function named `areIdentical(input1, input2)` that returns if both
 inputs are same value and data type.
 - Make a function named `not(input)` returns the input with a flipped boolean
 - Make a function named `notNot(input)` that the negation of the negation of the
 input.
 - Make a function named `and(predicate1, predicate2)` that returns the logical
 operation of AND
 - Make a function named `or(predicate1, predicate2)` that returns the logical
 operation of OR
 - Write a function called `reverseString(string)` that reverses a string
 - Make a function named `absoluteValue(number)` that returns the absolute value
 of a number.
 - Make a function named `rollDice(sides)` that takes in an argument containing
 the number of sides the die should have. Generate a random number between 1 up
 to and including the number of sides. */