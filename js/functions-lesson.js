"use strict";
(() => {

// two formats for declaring a function = hoisted (old) & arrow (new, not in curriculum)
// traditional method (hoisted, can call from anywhere in the document, even if code is after you call the function)
// function endings dont need ';'
// parameter = defining function
// argument = using function
// function helloWorld() {
//     alert(`Hello World!`);
// }

// arrow function (understand how to use it, and use it to impress employers!)
// const helloWorld = (name) => {
//     let message = `Hello ${name}`
//     return message;
// }
//
// let firstHello = helloWorld(`Gabriella`);
// console.log(firstHello);
// let secondHello = helloWorld(`Jason`);
// console.log(secondHello);

//

// const parseDiscordName = (name) => { // if you use {} you need to have return at the end!
//     let guildCharEnd = name.indexOf(`]`) + 1;
//     let guildName = name.substring(0, guildCharEnd);
//     let userName = name.substring(guildCharEnd);
//     let message = `The user's name is ${userName}.
//     They are a member of the ${guildName} guild.`;
//     return message;
// }
//
// let discordName = parseDiscordName(`[YoLo]Jason`);
// console.log(discordName);
//
// let discordName2 = parseDiscordName(`[GAMER]Billy`);
// console.log(discordName2);

let message;
const highFive = (name1, name2) => {
    message = `${name1} gives ${name2} a high five!`
    return message;
    consol.log(`YOU WILL NEVER SEE THIS!`); // once return is typed, the function is has deemed it's role complete
} // if it's a one line, you dont need {}

let names1 = highFive(`Jason`, `Javier`);
console.log(names1);

//

const totalUp = (x, y) => x + y;

let finalOutput = parseFloat(totalUp(2, 5));
console.log(finalOutput);

//

// create an arrow function isEven(num) that takes an integer as an argument
// it returns tre if the integer is even and false if not
const isEven = (num) => {
  let result = num % 2 === 0;
  return result;
}

let students = 24;
let evenStudents = isEven(students);
console.log(evenStudents);

// IIFE arrow function (immediately-invoked function expression) !!!!!!!!!! calls itself
(() => {

})();


// traditional IIFE
// (function()){
//
// })();



















})();