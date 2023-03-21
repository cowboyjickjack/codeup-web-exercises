"use strict"

/** INTRODUCTION **/

let person = {
    firstName: 'Jason',
    lastName: 'Merrell',
    email: 'jason.merrell@codeup.com'
};

// JSON is meant to be transported through the internet
// JSON objects are always in quotations, if manually written
// JSON.stringify will convert it from JS object to JSON

let personJSON = JSON.stringify(person);

/** DEMONSTRATION (this is like sending a request for data from websites) **/
// this is equivalent to sending the guy out to get ingredients to cook with
// if i log it, it turns into a promise, bc the guy isn't back yet... we must wait...
// let myPromise = fetch('https://swapi.dev/api/films/1/');
// console.log(myPromise);

//
fetch('https://swapi.dev/api/films/1/')
    .then();

