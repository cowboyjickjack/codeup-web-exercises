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

/** MONEY */

const formatMoney = input => {
    let daMoney;
    return daMoney = input.toLocaleString("en-US", {style: "currency", currency: "USD"});
}

/** Palindrome Checker */
const isPalindrome = input => {
    let inputValues = input.split('');
    let reverseInputValues = inputValues.reverse();
    let convertInput = reverseInputValues.join('');

    if ((input == convertInput || isNaN(input))) {
        return true;
    } else {
        return false;
    }
}

/** Return Highest Number */
const getHighestNumber = (a, b, c) => {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    let num3 = parseFloat(c);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        return false;
    } else {
        return Math.max(num1, num2, num3);
    }
}

/** Is numeric and not NaN */
const isNumericAndNotNaN = (input) => {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== `boolean` && typeof input !== `string`;
}

/** Abbreviate first/last name (ex: Sam Harris --> S.H) */
function abbrevName(name){
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

/** Sort an array and return the objects sorted by price in ascending order  */
const sortDrinkByPrice = drinks => {
    return drinks.sort((a, b) => a.price - b.price);
}

/** Hamburger Menu ---  */

let dropdowns = document.querySelectorAll('[data-dropdown="parent"]')
dropdowns.forEach(function (dropdown) {
    let toggle = dropdown.querySelector('[data-dropdown="toggle"]')
    toggle.addEventListener('click', function () {
        dropdowns.forEach(function (element) {
            // if already has class of open, and is not in this element, remove
            if (element.classList.contains('open') && element !== dropdown) {
                element.classList.remove('open')
            }
        })
        dropdown.classList.toggle('open');
    });
});

pageWrapper.addEventListener('click', function (event) {
    // if the event target is not a dropdown, close all dropdowns
    if (!event.target.closest('[data-dropdown="parent"]')) {
        dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove('open');
        });
    }
});