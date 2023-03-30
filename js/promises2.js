/*
 TODO: Using separations of concerns principles, module syntax,
     and async/await, create a series of code that:
      -   uses the StarWarsAPI: 'https://swapi.dev/'
      -   console logs a specific planet
      -   console logs the eye color of a specific character
      -   console logs all of the data on a specific movie
      *BONUS* Add it into the DOM however you want
*/
import {getCharacter, getPlanet, getEyeColor} from './starwars.js'

(async () => {
    let planet = await getPlanet(1);
    console.log(planet);
    let luke = await getCharacter(1);
    console.log(luke);
    let lukesEyeColor = await getEyeColor(1);
    console.log(lukesEyeColor);

})();



