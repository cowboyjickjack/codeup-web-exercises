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
    // console.log(fruit);
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

// pageWrapper.addEventListener('click', function (event) {
//     // if the event target is not a dropdown, close all dropdowns
//     if (!event.target.closest('[data-dropdown="parent"]')) {
//         dropdowns.forEach(function (dropdown) {
//             dropdown.classList.remove('open');
//         });
//     }
// });

/******************** WEATHER UTILS ********************/

/** MAP MARKER **/
// sets a permanent marker on the map based of long/lat coords
// const fogoMarker = new mapboxgl.Marker().
// setLngLat([-98.48535, 29.42362])
//     .addTo(map);
// // this enables a popup bubble
// const fogoPopup = new mapboxgl.Popup()
//     .setHTML('<p class="popup">Fogo De Chao</p>')
// fogoMarker.setPopup(fogoPopup);

/** WIND DIRECTION **/
function windCardinalDirection(degrees){
    let cardinalDirection = '';
    if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
        cardinalDirection = "N";
    } else if (degrees > 11.25 && degrees  <= 33.75) {
        cardinalDirection = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        cardinalDirection = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        cardinalDirection = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        cardinalDirection = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        cardinalDirection = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        cardinalDirection = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        cardinalDirection = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        cardinalDirection = "S";
    } else  if (degrees > 191.25 && degrees <= 213.75) {
        cardinalDirection = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25)  {
        cardinalDirection = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        cardinalDirection = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        cardinalDirection = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        cardinalDirection = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        cardinalDirection = "NW";
    } else if (degrees > 326.75 && degrees <= 348.75) {
        cardinalDirection = "NNW";
    }
    return cardinalDirection;
}

function appendLeadingZeroes(n){
    if(n <= 9){
        return "0" + n;
    }
    return n;
}

const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

/** TIME FORMAT **/
function formatTime(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let day = dateTime.getDate();
    let hour = appendLeadingZeroes(dateTime.getHours());
    let minutes = appendLeadingZeroes(dateTime.getMinutes());
    let seconds = appendLeadingZeroes(dateTime.getSeconds());
    return month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
}

/** DATE FROM TIME STAMP **/
function dateFromTimeStamp(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = appendLeadingZeroes(dateTime.getMonth() + 1);
    let day = dateTime.getDate();
    return `${year}-${month}-${day}`;
}

/** WEEKDAYS **/
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const daysOfWeekAbbreviated = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** NAMED DAY FROM DAY **/
function namedDayFromDay(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeek[dateTime.getDay()];
}

/** DAY OF THE WEEK FROM ABBREVIATED VERSION **/
function dayOfWeekFromDayAbbreviated(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeekAbbreviated[dateTime.getDay()];
}

/** MOST FREQUENT **/
function mostFrequent(array){
    const arrayElementsCount = array.reduce(function(total, element){
        if (!total[element]) {
            total[element] = 1;
        } else {
            total[element] = total[element] + 1;
        }
        return total;
    }, {});
    const arraySorted = Object.entries(arrayElementsCount).sort(function(a, b){
        return b[1] - a[1];
    });
    return arraySorted[0][0];
}

/** CALCULATE THE AVG **/
function average(array){
    let total = 0;
    array.forEach((element, index, array)=>total+=element);
    return total/array.length;
}