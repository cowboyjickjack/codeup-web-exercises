let a = 1;
let b = a++;
let c = ++a; // preincrement is completed before the next line
// what is the value of a, b, and c?
// 3, 1, 3
//console.log(a, b, c);

let d = "hello";
let e = false;

d++;
e++;
// NaN, NaN
//console.log(d, e);

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
// NaN - can't run a math operation on nothing, no NaN
//console.log(perplexed);

let price = 2.7;
price.toFixed(2); // toFixed is a method you can ONLY use on a NUMBER
// "2.70"

//let price = "2.7";
price.toFixed(2);
// error? already a string

isNaN(0) // false

isNaN(1) // false

isNaN("") // true - ACTUALLY FALSE?? it's empty, undefined.

isNaN("string") // true

isNaN("0") // true - ACTUALLY FALSE?

isNaN("1") // true - ACTUALLY FALSE?

isNaN("3.145") // true - ACTUALLY FALSE?

isNaN(Number.MAX_VALUE) // false

isNaN(Infinity) // false

isNaN("true") // true - reason = boolean value?

isNaN(true) // true - ACTUALLY FALSE?

isNaN("false") // true

isNaN(false) // false - maybe since boolean values are 0 and 1 ?

// to illustrate why the isNaN() function is needed:
NaN == NaN

!true // false

!false // true

!!true // true

!!false // false

!!0 // false

!!-0 // true - ACTUALLY FALSE? no difference between 0 and -0!

!!1 // true

!!-1 // false - ACTUALLY TRUE? it's not just 1 that's truthy, it's any number other than 0!

!!0.1 // false - ACTUALLY TRUE? still bigger than 0!

!!"hello" // true - string is a truthy value

!!"" // false

!!'' // false

!!"false" //true

!!"0" // true

let sample = `Hello Codeup`;
sample = `${sample} Students` // gotta love a backtick moment
sample = sample.replace('Students', 'Class');

// console.log(sample.length);
//console.log(sample.toUpperCase());
// console.log(sample.indexOf('c'));
// console.log(sample.indexOf('C'));

let sampleCharEnd = sample.indexOf('p') + 1;

//console.log(sampleCharEnd);

let company = sample.substring(6, sampleCharEnd);
// took me forever to realize that it would start at 6, not 0
// console.log(company);

let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let totalPrice = 3 * ( littleMermaid + brotherBear + hercules );
// console.log(`The price per day for each movie is $3.
// The total number of days the movies are rented is ${littleMermaid + brotherBear + hercules} days.
// The total price you will pay is $${totalPrice}`);

let google = 400 * 6;
let amazon = 380 * 4;
let facebook = 350 * 10;
let totalPaycheck = google + amazon + facebook;
let formattedPaycheck =totalPaycheck.toLocaleString("en-US", {style: "currency", currency: "USD"});
// console.log(`You will receive $${formattedPaycheck} in payment for this week.`); // how to put commas in money!

//

let student = "Gabriella";
let fullClass = true;
let scheduleConflict = true;

// if(fullClass && scheduleConflict) {
//     console.log(`Sorry ${student}, that class is full, and you're schedule is wack!`)
// } else {
//     console.log(`Congratulations, ${student}, you're enrolled!`)
// };

//

let offerExpired = false
let productAmount = 1
let memberStatus = true

// if((productAmount <= 2 || memberStatus) && !offerExpired) {
//     console.log(`Sorry Sir/Ma'am, this product offer cannot be redeemed today.`)
// } else {
//     console.log(`Thank you. Your product offer has been redeemed.`)
// };

//

// let username = 'codeup';
// let password = 'notastrongpassword';
// let passwordLength = password.length >= 5;
// let usernameLength = username.length <= 20;
//
// let userSpaceBegin = username.startsWith(' ');
// let passSpaceBegin = password.startsWith(' ');
// let userSpaceEnd = username.endsWith(' ');
// let passSpaceEnd = password.endsWith(' ');

// if( usernameLength && passwordLength && !password.includes(username) && !userSpaceBegin && !passSpaceBegin && !userSpaceEnd && !passSpaceEnd){
//     console.log(`Successful login!`)
// } else {
//     console.log(`Uh oh! The username/password you input does not meet our criteria.`)
// };

//
//
//
//
//
//
//
//
//

let username = 'codeup';
let password = 'notastrongpassword';

let passwordLength = password.length >= 5;
let usernameLength = username.length <= 20;
let userPassCombo = !password.includes(username);
let noWhiteSpaces = username.startsWith(' ') + username.endsWith(' ') + password.startsWith(' ') + password.endsWith(' ');

if ( usernameLength && passwordLength && userPassCombo && !noWhiteSpaces) {
    console.log(`Yay! You're logged in!`)
} else {
    console.log(`Oh no! You're login information isn't following the rules...`)
};





