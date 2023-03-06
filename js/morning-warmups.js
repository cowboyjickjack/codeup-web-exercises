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
/** WALKTHROUGH */
// try to figure out the algorithm in your head - as if you're simply talking to the computer
// it's called 'pseudo-code'!
// const minMax = numbersArray => {
//
// }

/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the
 * drinks objects sorted by price in ascending order.
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
// let drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10}
// ]
// try to figure out the algorithm in your head - as if you're simply talking to the computer
// sort is a function that accepts a function as an argument
// forEach accepts a function as it's argument - great use for this :)
//   it'll look in the array and compare the two parameters
// if you want a to come after b, you need to return -1 (for ascending order)
// if you want b to come after a, you need to return 1
let drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: "horchata", price: 12},
    {name: "water", price: 2},
    {name: "soda", price: 4}
]
const sortDrinkByPrice = drinks => {
    return drinks.sort((a, b) => a.price - b.price);
}

/** Start by looping over the array, console-logging the name of each city.
 * Then try console-logging the name and state.
 * Then try console-logging all the cities in Texas with populations over 1 million. */
const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
]
// for loop is a FUNDAMENTAL skill
// . notations = OBJECTS
// [] notations = ARRAY
const citiesLoop = cities => {
    for (let i = 0; i < cities.length; i++) {
        console.log(`${cities[i].name}, ${cities[i].state}`);
    }
}

/** Make sure you are comfortable with these techniques:
 * looping over the array, console-logging the name of each city.
 * Then try console-logging the name and state.
 * Then try console-logging all the cities in Texas with populations over 1 million.
 * Write a function that accepts one city object and returns true if the city is in Texas.
 * Write a function that accepts an array of city objects and the name of a state and
 * returns an array with only the cities in that state. **/

/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

const peopleAndBudgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]

// function getBudget(arrayOfObjects) {
//     let totalBudget = 0;
//     arrayOfObjects.forEach(object => totalBudget += object.budget);
//     return totalBudget;
// }

/** with reduce..? **/

const getBudget = arrayofObjects => {
    return arrayofObjects.reduce((total, object) => total += object.budget, 0);
}