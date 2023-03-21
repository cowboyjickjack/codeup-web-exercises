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

// contextually, this is what happens when you request data, and what you do with it
// this turns their response into json, then we have that data
// like dealing with a .zip file
// function getMovie(movie = 1) { // can assign numbers to default parameters as you declare them
//     return fetch('https://swapi.dev/api/films/1/')
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             return data;
//
//             // .catch = if anything goes wrong, run this, like a 404
//         }).catch(error => {
//             // commonly, log it
//             console.log(error.message);
//         });
// }
//
// getMovie().then(movie => {
//     /// continue on with the movie data;
//     console.log(movie);
// });

// this is you trying to cook your ticket/promise, and JS is going 1000000 mph
// won't work!
// let movie1 = getMovie();
// console.log(movie1);

/** MAKING THE CODE VERTICAL AGAIN **/
/** CHALLENGE YOURSELF TO USE ASYNC FUNCTIONS WHEN IT COMES TO PROMISES **/
// async function getMovieAsync(){
//     try {
//         // it'll wait until the fetch comes back and is assigned to variable
//         // await opens request, but ALSO pauses it
//         let response = await fetch('https://swapi.dev/api/films/1/');
//         // now we get to use it :)
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
//
// }

/** ASYNC AWAIT IS PREFERRED TO KEEP CODE ORGANIZED **/
const getMovieB = async (movie) => {
    let response = await fetch(`https://swapi.dev/api/films/${movie}`);
    let data = await response.json();
    return data;
}
// currently, the code below will return undefined
// let newHope = getMovieB(1);

// if we keep the baseline of code inside an IIFE, it will move vertically
(async()=>{
    // main line of code
    let newHope = getMovieB(1);
})();

/** EXERCISE: MAKE AN AJAX THAT FETCHES INFO ON LUKE SKYWALKER **/
async function getPeopleAsync(){
    try {
        // it'll wait until the fetch comes back and is assigned to variable
        // await opens request, but ALSO pauses it
        let response = await fetch(`https://swapi.dev/api/people/1/`);
        // now we get to use it :)
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

/** LUKE SKYWALKER WALKTHROUGH **/

const getPerson = async (person = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${person}/`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

(async()=>{
    // main line of code
    let luke = getPerson(1);
})();
