"use strict";

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string)
 * and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/
let add1 = '8646 Sunny Oaks'
let add2 = '5408 Villa Nueva'
let add3 = '23 Main'
let add4 = '243 Funny Long Name Street'

// const convertAddressToObject = address => { // doesn't work if address is <2 or >2 words...
//     let streetArray = address.split(' ');
//     let streetNumber = streetArray[0];
//     let streetName = `${streetArray[1]} ${streetArray[2]}`;
//     console.log(`Street Number: ${streetNumber}, Street Name: ${streetName}`);
//
// }
//
// console.log(convertAddressToObject());

/** WALKTHROUGH **/
// const convertAddressToObject = address => { // use indexOf(' ') to find the first space (4) and return addy num
//     const indexOfSpace = address.indexOf(' ');
//     const streetNumber = address.substring(0, indexOfSpace); // this will ensure that addy number can be >4 or <4
//     const streetName = address.substring(indexOfSpace + 1);
//     return {
//         streetNumber: streetNumber,
//         streetName: streetName
//     }
// }

/** NOT AS VERBOSE **/
// const convertAddressToObject = address => { // all in one go
//     return {
//         streetNumber: address.substring(0, address.indexOf(' ')),
//         streetName: address.substring(address.indexOf(' ') + 1)
//         }
// }

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person,
 * and has a 'pets' property for their owned pets. The function should return
 * the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

const people = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
]

// const totalPets = personsArray => {
//     // set up accumulator variable
//     let total = 0;
//     // loop over the array, adding to the accumulator
//     for (let i = 0; i < personsArray.length; i++){
//         total += personsArray[i].pets // only works when looping through an array of objects
//     }
//     // return the total
//     return total;
// }
/** BETTER/QUICKER VERSION **/
const totalPets = personsArray => {
    let total = 0;
    personsArray.forEach(person => { // in forEach, it takes a function that takes a parameter, and parameter
        //represents each element in the array
        total += person.pets;
    });
    return total;
}

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [12345, 5];
let arr3 = [1];
const minMax = numbersArray => {
    let min = Math.min.apply(Math, numbersArray);
    let max = Math.max.apply(Math, numbersArray);
    return {
        min,
        max
    }
}

/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */
let drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]

const sortDrinkByPrice = drinks => {
    return
}