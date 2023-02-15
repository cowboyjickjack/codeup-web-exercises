"use strict";

/* ########################################################################## */

const dollaDollaBills = num => {
    return parseFloat(num).toLocaleString("en-US", {style: "currency", currency: "USD"});
}

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// const analyzeColor = color => {
//     if (color.toLowerCase() === `red`) {
//         return `Tomatoes are red.`;
//     } else if (color.toLowerCase() === `blue`) {
//         return `Blueberries are blue.`;
//     } else {
//         return `I'm not familiar with ${color}.`;
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

//don't need the break if you're typing return
// const analyzeColor = color => {
//     switch (color) {
//         case `red`:
//             return `Tomatoes are red.`;
//             break;
//         case `blue`:
//             return `Blueberries are blue.`;
//             break;
//         case `green`:
//             return `Grass is green.`;
//             break;
//         default:
//             return `I'm not familiar with ${color}! Leave me alone!`;
//     }
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// const userColor = prompt(`What is your favorite color?`);
// alert(analyzeColor(userColor.toLowerCase())); //toLowerCase to catch capital letters

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// const calculateTotal = (luckyNumber, totalAmount) => {
//     if (luckyNumber === 0) {
//         return totalAmount;
//     } else if (luckyNumber === 1) {
//         return totalAmount * .9;
//     } else if (luckyNumber === 2) {
//         return totalAmount * .75;
//     } else if (luckyNumber === 3) {
//         return totalAmount * .65;
//     } else if (luckyNumber === 4) {
//         return totalAmount * .5;
//     } else if (luckyNumber === 5) {
//         return 0;
//     }
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
// let totalBill = parseFloat(prompt(`Please enter your total bill`));
// let priceAfterDiscount = calculateTotal(luckyNumber, totalBill);

// alert(`Your lucky number was ${luckyNumber}!`);
// alert(`Your price before the discount was ${dollaDollaBills(totalBill)}`);
// alert(`Your price after discount is ${dollaDollaBills(priceAfterDiscount)}`);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

const isNumericAndNotNaN = (input) => {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== `boolean` && typeof input !== `string`;
}
// isNumericAndNotNaN will be helpful for assessments!!!!!

let wantsToEnterNumber = confirm(`Would you like to enter a number?`);
if (wantsToEnterNumber) {
    const userNumber = parseFloat(prompt(`Enter a number.`));
    if (isNumericAndNotNaN(userNumber)) {
        if (userNumber % 2 === 0) {
            alert(`That number is EVEN.`);
        } else {
            alert(`That number is ODD.`);
        }
        alert(`That number plus 100 is ${userNumber + 100}.`);
        if (userNumber < 0) {
            alert(`That number is NEGATIVE.`);
        } else if (userNumber > 0) {
            alert(`That number is POSITIVE.`);
        } else {
            alert(`That number isn't negative OR positive.`);
        }
    } else {
        alert(`That's not a correct value type.`);
    }
}



