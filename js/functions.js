"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

const sayHello = (name) => {
    let message =  `Hello, ${name}!`;
    return message;
}
// console.log(sayHello(`Codeup`));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello(`Gabriella`);
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

const myName = `Gabriella`;
// console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

const isTwo = number => number === 2;
let randomMessage = isTwo(random);

// console.log(`The random number is ${random}`)
// console.log(randomMessage);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

const  calculateTip = ( tipPercent, billTotal )=> {
    let tipInDollars = parseFloat( (tipPercent / 100) * billTotal );
    let totalTip = parseFloat(tipInDollars);
    return (totalTip.toLocaleString("en-US", {style: "currency", currency: "USD"}));
}

// console.log(calculateTip(15, 33.42));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// let userBill = prompt(`We hope you enjoyed dining with us! Please input your total bill:`) // consider parseFloat since prompts return strings
// let userTip = prompt(`What percent would you like to tip?`);
// alert(`Thank you! Please ensure you're tipping: ${calculateTip(userTip, userBill)}`);


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

const applyDiscount = (originalPrice, discount) => {
    let discountPercent = discount / 100;
    let discountDollar = discountPercent * originalPrice;
    let totalAmount = originalPrice - discountDollar;
    return totalAmount.toLocaleString("en-US", {style: "currency", currency: "USD"});
}

// console.log(applyDiscount(45.99, 12));


/** FUNCTIONS PRACTICE
 * TODO:
 * Make a function called returnTwo() that returns the number 2 when called
 *    Test this function with `console.log(returnTwo())`
 */
const returnTwo = (num) => 2;

// console.log(returnTwo());

/**
 * TODO:
 * Make a function called sayHowdy() which console.logs the string “Howdy!”
 *    Test this function by directly calling `sayHowdy()`
 *    Remember this function does not need a defined return value
 */

const sayHowdy = () => console.log(`Howdy!`);
// sayHowdy();

/**
 * TODO:
 * Make a function called returnName() that returns the string of your name
 *    Test this function with `console.log(returnName())`
 */

const returnName = () => `Gabriella`;
// console.log(returnName());

/**
 * TODO:
 * Make a function called addThree() which takes in a number input and returns the number plus 3.
 *    Test this function with `console.log(addThree(5))`
 */

const addThree = num => parseFloat(num + 3);
// console.log(addThree(5));

/**
 * TODO:
 * Make a function called sayString() which returns the string input passed in.
 *    Test this function with `console.log(sayString('codeup'))`
 */

const sayString = (str) => str;
// console.log(sayString(`codeup`));

const doubleNum = x => x * 2;
// console.log(doubleNum(5));

const lowercaseString = (string) => string.toLowerCase();
// console.log(lowercaseString(`HELLO WORLD`));

const halfNum = x => x / 2;
// console.log(halfNum(7))

const remainder = (x, y) => x % y;
// console.log(remainder(7, 2));

const squareRoot = x => Math.sqrt(x);
// console.log(squareRoot());

/**
 * TODO:
 * Write a function that accepts a last name and a first name and returns the full name.
 */

// let firstName = prompt(`What's your first name?`);
// let lastName = prompt(`What's your last name?`);

const fullName = (firstName, lastName) => {
    alert(`Nice to meet you, ${firstName} ${lastName}!`);
}

// fullName(firstName, lastName);

const negative = input => {
    if (typeof input == `number` || isNaN(parseFloat(input))) { // true/false will slip through if not parseFloat
        return `That's not a number!`;
    } else if (input > 0) {
        return -input;
    } else {
        return input;
    }
}

const negativeNoConditionals = num => -Math.abs(num);
// console.log(negativeNoConditionals(2));

const reverseString = word => {
    return word.split(``).reverse(``).join(``);
}
// console.log(reverseString(`I put my thang down, flip it and reverse it.`));
