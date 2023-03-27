"use strict"
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