"use strict";

// console.log(`Hello from external JavaScript!`);
//
// alert(`Welcome to my website!`);
let username = prompt(`What's your name?`);
//
// let favColor = prompt(`I was thinking, what's your favorite color?`);
// console.log(`The user's favorite color is ${favColor}`);
//
// alert(`You wouldn't believe it, ${username}, but ${favColor} is my favorite color!`);

// parseFloat allows remainders > parseInt
// let movie1 = prompt(`What was the name of the first movie you rented?`);
// let movie1Input = parseFloat(prompt(`How many days do you want to rent ${movie1}?`)); // 3
// let movie2 = prompt(`What was the name of the second movie you rented?`);
// let movie2Input = parseFloat(prompt(`How many days do you want to rent ${movie2}?`)); // 5
// let movie3 = prompt(`What was the name of the third movie you rented?`);
// let movie3input = parseFloat(prompt(`How many days do you want to rent ${movie3}?`)); // 1
// let dailyCost = parseFloat(prompt(`What is the cost of renting a movie for one day?`)); // $3
// // if you don't parseInt, it will think you're inputting a string rather than a number!!!
//
// let totalDaysRented = (movie1Input + movie2Input + movie3input);
//
// let totalCost = dailyCost * totalDaysRented;
//
// let formattedTotal = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
//
// alert(`Your total payment is ${formattedTotal}`);
// console.log(`${username} payed ${formattedTotal} to rent the movies.`)
//
// let googleRate = parseInt(prompt(`What is the hourly pay rate for Google?`)); // 400
// let googleHours = parseInt(prompt(`Hours worked at Google:`)); // 6
// let googlePaycheck = googleRate * googleHours;
//
// let amazonRate = parseInt(prompt(`What is the hourly pay rate for Amazon?`)); // 380
// let amazonHours = parseInt(prompt(`Hours worked at Amazon:`)); // 4
// let amazonPaycheck = amazonRate * amazonHours;
//
// let facebookRate = parseInt(prompt(`What is the hourly pay rate for Facebook?`)); // 350
// let facebookHours = parseInt(prompt(`Hours worked at Facebook:`)); // 10
// let facebookPaycheck = facebookRate * facebookHours;
//
// let totalPaycheck = googlePaycheck + amazonPaycheck + facebookPaycheck;
// let formattedPaycheck = totalPaycheck.toLocaleString("en-US", {style: "currency", currency: "USD"});
//
// alert(`Your paycheck this week will be ${formattedPaycheck}.`);
// console.log(`Your total paycheck is ${formattedPaycheck}.`);
//
// let student = prompt(`What is your name?`);
// let fullClass = confirm(`If there is an available seat in this class, press 'Ok'. If not, press 'Cancel'.`);
// let scheduleConflict = confirm(`If your schedule does not conflict with this class, press 'Ok'. If it does, press 'Cancel'`);
//
// if(!fullClass || !scheduleConflict) {
//     alert(`Sorry ${student}, that class is full, and you're schedule will conflict!`), console.log(`${student} could not be enrolled.`)
// } else {
//     alert(`Congratulations, ${student}, you're enrolled!`), console.log(`${student} was successfully enrolled.`)
// };
//
let offerExpired = confirm(`If this product is valid, press 'Ok. If it is expired, press 'Cancel' `);
let productAmount = parseInt(prompt(`How many products are you purchasing today?`));
let memberStatus = confirm(`Are you a Gold Status Member? If so, press 'Ok'. If you are not, press 'Cancel'.`);

if((productAmount >= 2 || memberStatus) && !offerExpired) {
    alert(`Sorry Sir/Ma'am, this product offer cannot be redeemed today.`), console.log(`Product offer could not be redeemed.`)
} else {
    alert(`Thank you. Your product offer has been redeemed.`), console.log(`Product offer redeemed.`)
};


