"use strict"
/** ES6 SYNTAX IS SUPPORTED BY ALL BROWSERS
 * A WAY OF MAKING DATA MORE ACCESSIBLE **/

// const HelloWorld = (name = 'World', ) => {
//     if (!name) {
//         name = 'World';
//     }
//     return `Hello, ${name}!`;
// }
// let response = HelloWorld();
// console.log(response);
//
// const getPerson = async (id = 1) => {
//     let response = await fetch(`https://swapi.dev/api/people/${id}`);
//     let data = await response.json();
//     console.log(data.name);
// }

/** Object Construction Shorthand **/
const getEmployee = () => {
    // 'long' way
    // let response = fetch();
    // let data = response.json();
    let firstName = data.name.split(' ')[0];
    let lastName = data.name.split(' ')[1];
    // return {
    //     firstName: firstName, // key to the variables
    //     lastName: lastName
    // }
    // if variable is already named what the key will be, just say the name of the variable
    return {
        firstName,
        lastName,
        // and you can go right back to normal syntax
        email: 'gabriellamartinez0819@gmail.com'
    }
}

/** Object Deconstruction Shorthand **/
let employee = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    position: 'Software Engineer',
    startDate: '2020-01-01',
    // object within an object
    projects: {
        currentProject: {
            name: 'Nexus',
            startDate: '01-01-2001'
        },
        previousProjects: []
    }
}
// LONGHAND - BORING
// let firstName = employee.firstName;
// let lastName = employee.lastName;
// let email = employee.email;

// SHORTHAND - WOOHOO
// We're bringing the keys forward OUT of the object
// To pull out a specific array from an object in an object, look at comment line below
let {firstName, lastName, email, position, startDate, projects} = employee;
console.log(firstName);
let employee2 = {
    firstName,
    lastName,
    email,
    position,
    startDate,
// To pull out a specific array from an object in an object
    currentProject: projects.currentProject
}
console.log(projects);

/** LOOK AT MODULE SYNTAX - PRINCIPLE OF SEPERATION OF CONCERNS
 * SAYS: if functions, if possible, should only have a single responsibility.
 * This is so if a function goes wrong, it's easier to resolve.
 * utils.js is scratching the surface of seperations of concerns **/


