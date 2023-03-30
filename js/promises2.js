"use strict"

/*
 TODO: Using separations of concerns principles, module syntax,
     and async/await, create a series of code that:
      -   uses the StarWarsAPI: 'https://swapi.dev/'
      -   console logs a specific planet
      -   console logs the eye color of a specific character
      -   console logs all of the data on a specific movie
      *BONUS* Add it into the DOM however you want
*/

/** FETCHING PLANET INFO **/
export const getStarWarsPlanets = async () => {
    try {
        let response = await fetch(`https://swapi.dev/api/planets/`);
        let data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const specificPlanet = async (planetNumber) => {
    try {
        let response = await fetch(`https://swapi.dev/api/planets/${planetNumber}/`);
        let data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
};
// console.log(specificPlanet(7));
/** FETCHING EYE COLOR INFO **/
export const getStarWarsCharacters = async () => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/`);
        let data = await response.json();
        let people = data.results;
        console.log(people);
        return data;
    } catch (error) {
        console.log(error);
    }
};
// console.log(getStarWarsCharacters());
export const starWarsEyeColor = async () => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/`);
        let data = await response.json();
        let people = data.results;
        console.log(people);
        return data;
    } catch (error) {
        console.log(error);
    }
};
console.log(starWarsEyeColor())