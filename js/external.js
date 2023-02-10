"use strict";

console.log(`Hello from external JavaScript!`);

alert(`Welcome to my website!`);

let favoriteColor = prompt(`I was thinking, what's your favorite color?`);
console.log(`The user's favorite color is ${favoriteColor}`);

alert(`You wouldn't believe it, but ${favoriteColor} is my favorite color!`);

let littleMermaid = parseInt(prompt(`How many days do you want to rent The Little Mermaid?`)); // 3
let brotherBear = parseInt(prompt(`How many days do you want to rent Brother Bear?`)); // 5
let hercules = parseInt(prompt(`How many days do you want to rent Hercules?`)); // 1
let dailyCost = parseInt(prompt(`What is the cost of renting a movie for one day?`)); // $3
// if you don't parseInt, it will think you're inputting a string rather than a number!!!

let totalDaysRented = (littleMermaid + brotherBear + hercules);

let totalCost = dailyCost * totalDaysRented;

let formattedTotal = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

alert(`Your total payment is ${formattedTotal}`);

let googleRate = parseInt(prompt(`What is the hourly pay rate for Google?`)); // 400
let amazonRate = parseInt(prompt(`What is the hourly pay rate for Amazon?`)); // 380
let facebookRate = parseInt(prompt(`What is the hourly pay rate for Facebook?`)); // 350
let googleHours = parseInt(prompt(`Hours worked at Google:`)); // 6
let amazonHours = parseInt(prompt(`Hours worked at Amazon:`)); // 4
let facebookHours = parseInt(prompt(`Hours worked at Facebook:`)); // 10

let googlePaycheck = googleRate * googleHours;
let amazonPaycheck = amazonRate * amazonHours;
let facebookPaycheck = facebookRate * facebookHours;

let totalPaycheck = googlePaycheck + amazonPaycheck + facebookPaycheck;
let formattedPaycheck = totalPaycheck.toLocaleString("en-US", {style: "currency", currency: "USD"});

alert(`Your paycheck this week will be ${formattedPaycheck}.`);

let student = prompt(`What is your name?`);
let fullClass = confirm(`If there is an available seat in this class, press 'Ok'. If not, press 'Cancel'.`);
let scheduleConflict = confirm(`If your schedule does not conflict with this class, press 'Ok'. If it does, press 'Cancel'`);

if(!fullClass || !scheduleConflict) {
    alert(`Sorry ${student}, that class is full, and you're schedule will conflict!`)
} else {
    alert(`Congratulations, ${student}, you're enrolled!`)
};

let offerExpired = confirm(`If this product is valid, press 'Ok. If it is expired, press 'Cancel' `)
let productAmount = prompt(`How many products are you purchasing today?`)
let memberStatus = confirm(`Are you a Gold Status Member?`)

if((productAmount >= 2 || memberStatus) && !offerExpired) {
    alert(`Sorry Sir/Ma'am, this product offer cannot be redeemed today.`)
} else {
    alert(`Thank you. Your product offer has been redeemed.`)
};


